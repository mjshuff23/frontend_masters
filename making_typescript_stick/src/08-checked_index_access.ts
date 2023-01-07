// Checked Index Access
// ---------------------
// If you’ve ever heard me rant about typing Dictionaries, you may recall that my advice to describe them as having a possibility of holding undefined under some keys

// Mike thinks this is way too optimistic
type TheDict<T> = { [K: string]: T }
 
const d: TheDict<string[]> = {}
// d.rhubarb.join(", ")
// My advice was to explicitly type it as

type TheDict2<T> = { [K: string]: T | undefined }
const d2: TheDict2<string[]> = {}
// d.rhubarb.join(", ") // 💥
// Object is possibly 'undefined'.