class RotaCat {
    static urlAPI = 'https://api.thecatapi.com/v1/images/search'
    static async get() {
        let response = await fetch(this.urlAPI)
        let data = await response.json()
        return data
    }
    static async urlCat() {
        const response = await this.get()
        const data = await response[0].url
        return data
    }
}
export { RotaCat }