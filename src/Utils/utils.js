module.exports = {
    divideHex(hex) {
        const r = hex.substr(1, 2)
        const g = hex.substr(3, 2)
        const b = hex.substr(5, 2)
        return {
            r,
            g,
            b
        }
    },
    hex2RGBA({hex, transparency = 1}) {
        const dividedHex = this.divideHex(hex)
        return `rgba(${dividedHex.r}, ${dividedHex.g}, ${dividedHex.b}, ${transparency})`
    }
}