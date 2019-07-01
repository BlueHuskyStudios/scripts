package org.bh.scripts.general.serialization

import org.w3c.dom.Storage
import kotlin.browser.window

class NamespacedLocalStorage(val namespace: String) {

    private fun String.namespaced() = "$namespace.$this"
    private fun String.isInNamespace() = startsWith(namespace)


    operator fun get(keyName: String): String? {
        return LocalStorage[keyName.namespaced()]
    }


    operator fun set(keyName: String, newValue: String?) {
        LocalStorage[keyName.namespaced()] = newValue
    }


    fun clear() = LocalStorage
            .filter { it.keyName.isInNamespace() }
            .forEach { LocalStorage[it.keyName] = null }
}
