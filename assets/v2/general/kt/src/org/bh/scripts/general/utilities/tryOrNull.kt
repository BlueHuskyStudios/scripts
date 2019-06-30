package org.bh.scripts.general.utilities

fun <T> tryOrNull(danger: () -> T): T? = try { danger() } catch (_: Throwable) { null }