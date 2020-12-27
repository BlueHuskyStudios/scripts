package org.bh.scripts.general.utilities


val String.isCapitalized get() = !isEmpty() && this[0].toUpperCase() == this[0]
