import i18next from "i18next"
import Backend from "i18next-chained-backend"
import LocalStorageBackend from "i18next-localstorage-backend" // primary use cache
import HttpApi from "i18next-http-backend" // fallback http lo
import { initReactI18next } from "react-i18next"
import Url from "url-parse"
import configs from "../configs/app.configs"

i18next
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: "en",
        debug: configs.environment === "local" || configs.environment === "development",
        backend: {
            backends: [
                LocalStorageBackend, // primary
                HttpApi // fallback
            ],
            backendOptions: [
                {
                    expirationTime: configs.enableClientCache ? configs.clientCacheExpirationTime : 1000,
                    defaultVersion: configs.build
                },
                {
                    crossDomain: true,
                    withCredentials: true,
                    customHeaders: {},
                    queryStringParams: { v: configs.version },
                    loadPath: (langs, namespaces) => {
                        // @ToDo: Add multi-loading support
                        const [lang] = langs
                        let [namespace] = namespaces
                        if (namespace === "translation") namespace = "pages/translation"
                        const url = new Url(`${configs.apiEndpoint}/api/content/${namespace}`, true)
                        const query = {
                            ...url.query,
                            language: lang
                        }
                        url.set("query", query)
                        return url.toString()
                    }
                }
            ]
        }
    })

export default i18next
