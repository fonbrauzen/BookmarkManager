export class LocalHelper {
    static SetLocalObjectByKey = (key: string, obj: object): void => {
        window.localStorage.setItem(key, JSON.stringify(obj));
    }
    static GetLocalObjectByKey = (key: string): object => {
        return JSON.parse(window.localStorage.getItem(key));
    }
}
