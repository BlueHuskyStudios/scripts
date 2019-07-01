package org.bh.scripts.general.serialization

import org.w3c.dom.Storage

data class StoragePair(val keyName: String, val value: String) {
    companion object
}


@Suppress("UnnecessaryVariable")
operator fun StoragePair.Companion.invoke(from: Storage, at: Int): StoragePair? {
    val storage = from
    val index = at

    val keyName = from.key(index) ?: return null

    return StoragePair(keyName = keyName, value = storage.getItem(keyName) ?: return null)
}
