export default class AuthenticationManager {

    constructor() {
        this.authenticatedActivitiesIds = [];
    }

    isAuthenticated(activity, onAuthenticated, onNotAuthenticated) {
        if (activity.requiresAuthentication === true) {

            let cacheAndThenOnAuthenticated = () => {
                this.authenticatedActivitiesIds.push(activity.id);
                onAuthenticated();
            }

            let askServerIfMemoryIsNotAuthenticated = () => {
                this._askServerIsAuthenticated(activity, cacheAndThenOnAuthenticated, onNotAuthenticated);
            }

            this._askMemoryIsAuthenticated(activity, cacheAndThenOnAuthenticated, askServerIfMemoryIsNotAuthenticated);
        } else {
            onAuthenticated();
        }
    }

    _askMemoryIsAuthenticated(activity, onAuthenticated, onNotAuthenticated) {
        if (this.authenticatedActivitiesIds.includes(activity.id)) {
            onAuthenticated();
        } else {
            onNotAuthenticated();
        }
    }

    _askServerIsAuthenticated(activity, onAuthenticated, onNotAuthenticated) {
        this._checkAuthentication("secret.html")
            .then(response => {
                console.log("Checked authentication - response:", response);
                let success = this._isAuthenticationSuccess(response);
                if (success) {
                    console.log("Authenticated.")
                    onAuthenticated();
                } else {
                    console.log("Not Authenticated.")
                    onNotAuthenticated();
                }
            })
            .catch(response => console.error("Error checking authentication:", response));
    }

    _checkAuthentication(url = ``) {
        // Default options are marked with *
        return fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
        })
    }

    _isAuthenticationSuccess(response) {
        return (!response.url.endsWith("login"));
    }
}