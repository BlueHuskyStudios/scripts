@file:Suppress("unused")

package jQueryInterface

import org.w3c.dom.*
import org.w3c.dom.events.*


typealias EventHandler = (Event?) -> Unit
typealias JQueryMapper<To> = (index: Int, element: Element) -> To
typealias JQueryIterator = JQueryMapper<Unit>


/**
 * @author Ben Leggiero
 * @since 2017-11-25
 */
external class JQuery {

    fun addClass(className: String): JQuery
    fun addClass(f: (Int, String) -> String): JQuery

    fun hasClass(className: String): Boolean
    fun removeClass(className: String): JQuery

    fun toggleClass(className: String): JQuery
    fun toggleClass(className: String, state: Boolean): JQuery
    fun toggleClass(className: Array<String>): JQuery
    fun toggleClass(className: Array<String>, state: Boolean): JQuery
    fun toggleClass(function: (index: Int, className: String, state: Boolean) -> String): JQuery
    fun toggleClass(function: (index: Int, className: String, state: Boolean) -> String, state: Boolean): JQuery


    fun attr(attrName: String): Any?
    fun attr(attrName: String, value: String?): JQuery
    fun attr(attrName: String, value: Double?): JQuery
    fun attr(attrName: String, value: Boolean?): JQuery
    fun prop(propertyName: String): Any?
    fun prop(propertyName: String, value: String?): JQuery
    fun prop(propertyName: String, value: Double?): JQuery
    fun prop(propertyName: String, value: Boolean?): JQuery
    fun removeProp(propertyName: String): JQuery
    fun data(): Map<String, Any>
    fun data(key: String): Any?
    fun data(key: String, value: Any?): JQuery
    fun data(keyValuePairs: Map<String, Any>): JQuery
    fun `val`(): String?
    fun `val`(newValue: String?): JQuery
    fun `val`(newValue: Double?): JQuery
    fun `val`(newValue: Array<*>?): JQuery

    fun html(): String
    fun html(s: String): JQuery
    fun html(f: (Int, String) -> String): JQuery


    fun height(): Number
    fun width(): Number

    fun click(): JQuery

    fun mousedown(handler: (MouseEvent) -> Unit): JQuery
    fun mouseup(handler: (MouseEvent) -> Unit): JQuery
    fun mousemove(handler: (MouseEvent) -> Unit): JQuery

    fun dblclick(handler: (MouseClickEvent) -> Unit): JQuery
    fun click(handler: (MouseClickEvent) -> Unit): JQuery

    fun on(eventNames: String, selector: String = definedExternally, handler: (Event) -> Unit)
    fun <T> on(eventNames: String, selector: String = definedExternally, data: T? = definedExternally, handler: (Event, T?) -> Unit)

    fun trigger(eventName: String): JQuery
    fun trigger(event: Event): JQuery

    fun select(): JQuery
    fun select(eventData: Any? = definedExternally, handler: (Event) -> Unit): JQuery

    fun load(handler: EventHandler): JQuery
    fun change(handler: EventHandler): JQuery


    fun append(str: String): JQuery
    fun append(str: Element): JQuery
    fun append(str: JQuery): JQuery
    fun append(str: Array<String>): JQuery
    fun append(str: Array<Element>): JQuery
    fun append(str: Array<JQuery>): JQuery

    fun prepend(str: String): JQuery
    fun prepend(str: Element): JQuery
    fun prepend(str: JQuery): JQuery
    fun prepend(str: Array<String>): JQuery
    fun prepend(str: Array<Element>): JQuery
    fun prepend(str: Array<JQuery>): JQuery

    fun before(content: String): JQuery
    fun before(content: Element): JQuery
    fun before(content: JQuery): JQuery
    fun before(content: Array<String>): JQuery
    fun before(content: Array<Element>): JQuery
    fun before(content: Array<JQuery>): JQuery

    fun after(content: String): JQuery
    fun after(content: Element): JQuery
    fun after(content: JQuery): JQuery
    fun after(content: Array<String>): JQuery
    fun after(content: Array<Element>): JQuery
    fun after(content: Array<JQuery>): JQuery


    /**
     * Remove the set of matched elements from the DOM.
     *
     * Similar to `.empty()`, the `.remove()` method takes elements out of the DOM. Use `.remove()` when you want to
     * remove the element itself, as well as everything inside it. In addition to the elements themselves, all bound
     * events and jQuery data associated with the elements are removed. To remove the elements without removing data
     * and events, use `.detach()` instead.
     */
    fun remove(): JQuery
    fun empty(): JQuery
    fun detach(): JQuery
    fun ready(handler: EventHandler): JQuery
    fun text(text: String): JQuery
    fun slideUp(): JQuery
    fun hover(handlerInOut: EventHandler): JQuery
    fun hover(handlerIn: EventHandler, handlerOut: EventHandler): JQuery
    fun prev(): JQuery
    fun next(): JQuery
    fun parent(): JQuery

    fun off(): JQuery

    fun toArray(): Array<Element>
    fun <To> map(mapper: JQueryMapper<To>): Array<To>

    val length: Int
    fun size(): Int

    operator fun get(index: Int): Element?

    fun each(iterator: JQueryIterator)
}



typealias JQueryProviderFunction<T> = Element.(index: Int, html: String) -> T



open public external class MouseEvent(): Event {
    public val pageX: Double
    public val pageY: Double
//    public fun preventDefault()
    public fun isDefaultPrevented(): Boolean
}

public external class MouseClickEvent() : MouseEvent {
    public val which: Int
}

@JsName("$")
public external fun jq(selector: String): JQuery

@JsName("$")
public external fun jq(selector: String, context: Element): JQuery

@JsName("$")
public external fun jq(selector: String, context: JQuery): JQuery

@JsName("$")
public external fun jq(callback: () -> Unit): JQuery

@JsName("$")
public external fun jq(jqueryObject: JQuery): JQuery

@JsName("$")
public external fun jq(element: Element): JQuery

@JsName("$")
public external fun jq(document: Document): JQuery

@JsName("$")
public external fun jq(): JQuery



@Suppress("UnsafeCastFromDynamic")
inline val EventTarget.parentElement: Element
    get() = asDynamic().parentElement
