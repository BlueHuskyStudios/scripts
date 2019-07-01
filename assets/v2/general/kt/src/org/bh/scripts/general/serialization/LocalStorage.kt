@file:Suppress("unused")

package org.bh.scripts.general.serialization

import kotlin.browser.window



object LocalStorage: AbstractMutableCollection<StoragePair>() {

    operator fun get(keyName: String): String? {
        return window.localStorage.getItem(keyName)
    }


    operator fun set(keyName: String, newValue: String?) {
        if (null == newValue) {
            window.localStorage.removeItem(keyName)
        }
        else {
            window.localStorage.setItem(keyName, newValue)
        }
    }


    override fun clear() = window.localStorage.clear()



    // MARK: - AbstractMutableCollection

    override val size
        get() = window.localStorage.length


    override fun iterator() = object : MutableIterator<StoragePair> {

        var index = 0

        override fun hasNext() = index < size

        override fun next() = StoragePair(from = window.localStorage, at = index)
                ?.also { index += 1 }
                ?: error("Local storage broke its contract that there was an item at index $index")

        override fun remove() = window.localStorage.removeItem(key = window.localStorage.key(index)
                ?: error("Local storage broke its contract that there was an item at index $index"))

    }


    override fun add(element: StoragePair): Boolean {
        window.localStorage.setItem(element.keyName, element.value)
        return true
    }


    override fun remove(element: StoragePair) =
            if (null == window.localStorage.getItem(element.keyName)) {
                false
            }
            else {
                window.localStorage.removeItem(element.keyName)
                true
            }
}



operator fun LocalStorage.invoke(namespace: String) = NamespacedLocalStorage(namespace = namespace)


val LocalStorage.blueHusky get() = NamespacedLocalStorage(namespace = "org.bh")
