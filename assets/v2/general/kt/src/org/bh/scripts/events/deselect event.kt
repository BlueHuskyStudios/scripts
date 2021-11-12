package org.bh.scripts.events

import jQueryInterface.JQuery
import jQueryInterface.jq
import org.w3c.dom.events.Event


/**
 * Sets up the "deselect" event in jQuery. Listen for this event with `jQueryWhatever.on("deselect") { event -> ... }`
 *
 * Adapted from https://stackoverflow.com/a/11174581/453435
 */
fun setupDeselectEvent() {
    var selected = js("{}")

    jq("input[type='radio']")
        .click { event ->
            if ((js("this.name in selected") as Boolean)
                    && `this` != selected[`this`.name])
            {
                jq(selected[`this`.name] as String).trigger("deselect")
            }

            selected[`this`.name] = `this`
        }
        .filter(":checked")
        .each { _, _ ->
            selected[`this`.name] = `this`
        }
}


private inline val `this` get() = js("this")



// MARK: - JQuery sugar

inline fun JQuery.deselect(noinline handler: (Event) -> Unit)
    = on("deselect", handler = handler)
