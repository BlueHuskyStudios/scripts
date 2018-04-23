package org.bh.scripts.general.utilities

/*
 * @author Ben Leggiero
 * @since 2018-04-23
 */




operator fun <K, V> MutableMap<K, V>.get(key: K, backupValue: () -> V): V {
    return getOrPut(key, backupValue)
}
