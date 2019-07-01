package org.bh.scripts.general.utilities

import kotlin.js.Json
import kotlin.js.RegExpMatch


inline val RegExpMatch.groups: Json get() = asDynamic().groups.unsafeCast<Json>()
