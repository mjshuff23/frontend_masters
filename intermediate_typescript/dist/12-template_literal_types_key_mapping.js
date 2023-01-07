"use strict";
// Template Literal Types & Key Mapping
const dataStateExample = {
    digits: [1, 2, 3],
    names: ["a", "b", "c"],
    flags: {
        darkMode: true,
        mobile: false
    }
};
function load(dataSDK) {
    dataSDK.setDigits([14]);
    dataSDK.setNames(["d", "e", "f"]);
    dataSDK.setFlags({ darkMode: false, mobile: true });
}
