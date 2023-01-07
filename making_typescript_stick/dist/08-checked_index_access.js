"use strict";
// Checked Index Access
// ---------------------
// If you’ve ever heard me rant about typing Dictionaries, you may recall that my advice to describe them as having a possibility of holding undefined under some keys
const d = {};
const d2 = {};
// d.rhubarb.join(", ") // 💥
// Object is possibly 'undefined'.
