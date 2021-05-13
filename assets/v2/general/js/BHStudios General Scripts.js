if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'BHStudios General Scripts'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'BHStudios General Scripts'.");
}this['BHStudios General Scripts'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var addClass = Kotlin.kotlinx.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlinx.dom.removeClass_hhb33f$;
  var hasClass = Kotlin.kotlinx.dom.hasClass_46n0ku$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var equals = Kotlin.equals;
  var toString = Kotlin.toString;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_emfgvx$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var AbstractMutableCollection = Kotlin.kotlin.collections.AbstractMutableCollection;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toChar = Kotlin.toChar;
  var Throwable = Error;
  var throwCCE = Kotlin.throwCCE;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var decapitalize = Kotlin.kotlin.text.decapitalize_pdl1vz$;
  var wrapFunction = Kotlin.wrapFunction;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var getCallableRef = Kotlin.getCallableRef;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  ThemeSwatchModel$color.prototype = Object.create(ThemeSwatchModel.prototype);
  ThemeSwatchModel$color.prototype.constructor = ThemeSwatchModel$color;
  ThemeSwatchModel$brightness.prototype = Object.create(ThemeSwatchModel.prototype);
  ThemeSwatchModel$brightness.prototype.constructor = ThemeSwatchModel$brightness;
  LocalStorage.prototype = Object.create(AbstractMutableCollection.prototype);
  LocalStorage.prototype.constructor = LocalStorage;
  ThemeBrightnessTier.prototype = Object.create(Enum.prototype);
  ThemeBrightnessTier.prototype.constructor = ThemeBrightnessTier;
  var get_parentElement = defineInlineFunction('BHStudios General Scripts.jQueryInterface.get_parentElement_s15u7w$', function ($receiver) {
    return $receiver.parentElement;
  });
  function WrappedHtmlView() {
  }
  WrappedHtmlView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WrappedHtmlView',
    interfaces: []
  };
  function get_className($receiver) {
    return $receiver.htmlElement.className;
  }
  function addClass_0($receiver, newClasses) {
    return addClass($receiver.htmlElement, newClasses.slice());
  }
  function removeClass_0($receiver, oldClasses) {
    return removeClass($receiver.htmlElement, oldClasses.slice());
  }
  function hasClass_0($receiver, possibleClass) {
    return hasClass($receiver.htmlElement, possibleClass);
  }
  Delegates$observable$ObjectLiteral.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral.prototype.constructor = Delegates$observable$ObjectLiteral;
  function Delegates$observable$ObjectLiteral(closure$onChange, initialValue) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue);
  }
  Delegates$observable$ObjectLiteral.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function ButtonController(initialModel, initialView) {
    this.suppressChangeReactions_0 = false;
    this.pressListeners_0 = LinkedHashSet_init();
    this.model_2jw593$_0 = new Delegates$observable$ObjectLiteral(ButtonController$model$lambda(this), initialModel);
    this.view_ko9l31$_0 = new Delegates$observable$ObjectLiteral(ButtonController$view$lambda(this), initialView);
    this.didSetModel_0(initialModel);
    this.didSetView_0(initialView);
  }
  var ButtonController$model_metadata = new PropertyMetadata('model');
  Object.defineProperty(ButtonController.prototype, 'model', {
    configurable: true,
    get: function () {
      return this.model_2jw593$_0.getValue_lrcp0p$(this, ButtonController$model_metadata);
    },
    set: function (model) {
      this.model_2jw593$_0.setValue_9rddgb$(this, ButtonController$model_metadata, model);
    }
  });
  var ButtonController$view_metadata = new PropertyMetadata('view');
  Object.defineProperty(ButtonController.prototype, 'view', {
    configurable: true,
    get: function () {
      return this.view_ko9l31$_0.getValue_lrcp0p$(this, ButtonController$view_metadata);
    },
    set: function (view) {
      this.view_ko9l31$_0.setValue_9rddgb$(this, ButtonController$view_metadata, view);
    }
  });
  ButtonController.prototype.didSetModel_0 = function (newModel) {
    newModel.delegate = this;
  };
  ButtonController.prototype.didSetView_0 = function (newView) {
    this.suppressChangeReactions_0 = true;
    loadFromView(this.model, newView);
    this.suppressChangeReactions_0 = false;
  };
  ButtonController.prototype.didPress_9ojx7i$ = function (event) {
    var tmp$;
    tmp$ = this.pressListeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(event);
    }
  };
  ButtonController.prototype.addPressListener_gbr1zf$ = function (newPressListener) {
    this.pressListeners_0.add_11rb$(newPressListener);
  };
  function ButtonController$model$lambda(this$ButtonController) {
    return function (f, f_0, newModel) {
      this$ButtonController.didSetModel_0(newModel);
      return Unit;
    };
  }
  function ButtonController$view$lambda(this$ButtonController) {
    return function (f, f_0, newView) {
      this$ButtonController.didSetView_0(newView);
      return Unit;
    };
  }
  ButtonController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ButtonController',
    interfaces: [ButtonModelDelegate]
  };
  function ButtonController_init(htmlElement, $this) {
    $this = $this || Object.create(ButtonController.prototype);
    ButtonController.call($this, ButtonModel$Companion_getInstance().invoke_2rdptt$(htmlElement), new ButtonViewWrapper(htmlElement));
    return $this;
  }
  function loadFromView$lambda(this$loadFromView) {
    return function (event) {
      this$loadFromView.handleClick_9ojx7i$(event);
      return Unit;
    };
  }
  function loadFromView($receiver, view) {
    view.htmlElement.addEventListener('click', loadFromView$lambda($receiver));
  }
  function ButtonModel() {
    ButtonModel$Companion_getInstance();
    this.delegate = null;
  }
  ButtonModel.prototype.handleClick_9ojx7i$ = function (event) {
    var tmp$;
    (tmp$ = this.delegate) != null ? (tmp$.didPress_9ojx7i$(event), Unit) : null;
  };
  function ButtonModel$Companion() {
    ButtonModel$Companion_instance = this;
  }
  ButtonModel$Companion.prototype.invoke_2rdptt$ = function (htmlElement) {
    return new ButtonModel();
  };
  ButtonModel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ButtonModel$Companion_instance = null;
  function ButtonModel$Companion_getInstance() {
    if (ButtonModel$Companion_instance === null) {
      new ButtonModel$Companion();
    }return ButtonModel$Companion_instance;
  }
  ButtonModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ButtonModel',
    interfaces: []
  };
  function ButtonModelDelegate() {
  }
  ButtonModelDelegate.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ButtonModelDelegate',
    interfaces: []
  };
  function ButtonViewWrapper(htmlElement) {
    this.htmlElement_i07vtv$_0 = htmlElement;
  }
  Object.defineProperty(ButtonViewWrapper.prototype, 'htmlElement', {
    get: function () {
      return this.htmlElement_i07vtv$_0;
    }
  });
  ButtonViewWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ButtonViewWrapper',
    interfaces: [WrappedHtmlView]
  };
  function SidebarButtonController(buttonController, sidebarController) {
    SidebarButtonController$Companion_getInstance();
    this.buttonController = buttonController;
    this.sidebarController = sidebarController;
    this.buttonController.addPressListener_gbr1zf$(SidebarButtonController_init$lambda(this));
  }
  SidebarButtonController.prototype.didPress_9ojx7i$ = function (event) {
    this.sidebarController.toggleHidden();
  };
  function SidebarButtonController$Companion() {
    SidebarButtonController$Companion_instance = this;
  }
  SidebarButtonController$Companion.prototype.invoke_rw7l0w$ = function (buttonModel, sidebarController) {
    var tmp$;
    if (buttonModel != null && sidebarController != null) {
      tmp$ = new SidebarButtonController(buttonModel, sidebarController);
    } else {
      tmp$ = null;
    }
    return tmp$;
  };
  SidebarButtonController$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SidebarButtonController$Companion_instance = null;
  function SidebarButtonController$Companion_getInstance() {
    if (SidebarButtonController$Companion_instance === null) {
      new SidebarButtonController$Companion();
    }return SidebarButtonController$Companion_instance;
  }
  function SidebarButtonController_init$lambda(this$SidebarButtonController) {
    return function (event) {
      this$SidebarButtonController.didPress_9ojx7i$(event);
      return Unit;
    };
  }
  SidebarButtonController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SidebarButtonController',
    interfaces: [ButtonModelDelegate]
  };
  Delegates$observable$ObjectLiteral_0.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_0.prototype.constructor = Delegates$observable$ObjectLiteral_0;
  function Delegates$observable$ObjectLiteral_0(closure$onChange, initialValue) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue);
  }
  Delegates$observable$ObjectLiteral_0.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function SidebarController(initialModel, initialView) {
    SidebarController$Companion_getInstance();
    this.suppressChangeReactions_0 = false;
    this.model_n7tbub$_0 = new Delegates$observable$ObjectLiteral_0(SidebarController$model$lambda(this), initialModel);
    this.view_qvqbrt$_0 = new Delegates$observable$ObjectLiteral_0(SidebarController$view$lambda(this), initialView);
    this.didSetModel_0(initialModel);
    this.didSetView_0(initialView);
  }
  var SidebarController$model_metadata = new PropertyMetadata('model');
  Object.defineProperty(SidebarController.prototype, 'model', {
    configurable: true,
    get: function () {
      return this.model_n7tbub$_0.getValue_lrcp0p$(this, SidebarController$model_metadata);
    },
    set: function (model) {
      this.model_n7tbub$_0.setValue_9rddgb$(this, SidebarController$model_metadata, model);
    }
  });
  var SidebarController$view_metadata = new PropertyMetadata('view');
  Object.defineProperty(SidebarController.prototype, 'view', {
    configurable: true,
    get: function () {
      return this.view_qvqbrt$_0.getValue_lrcp0p$(this, SidebarController$view_metadata);
    },
    set: function (view) {
      this.view_qvqbrt$_0.setValue_9rddgb$(this, SidebarController$view_metadata, view);
    }
  });
  SidebarController.prototype.didSetModel_0 = function (newModel) {
    newModel.delegate = this;
  };
  function SidebarController$didSetView$lambda(this$SidebarController) {
    return function (it) {
      this$SidebarController.toggleHidden();
      return Unit;
    };
  }
  SidebarController.prototype.didSetView_0 = function (newView) {
    this.suppressChangeReactions_0 = true;
    if (newView == null) {
      this.didShowOrHide_dqye30$(this.model.isShown, this.model.isShown);
    } else {
      loadFromView_0(this.model, newView);
      newView.scrimHtmlElement.click(SidebarController$didSetView$lambda(this));
    }
    this.suppressChangeReactions_0 = false;
  };
  SidebarController.prototype.toggleHidden = function () {
    this.model.isShown = !this.model.isShown;
  };
  function SidebarController$Companion() {
    SidebarController$Companion_instance = this;
    this.anySidebar_lmurw4$_0 = lazy(SidebarController$Companion$anySidebar$lambda);
  }
  SidebarController$Companion.prototype.invoke_ejp6n4$ = function (htmlElement) {
    if (htmlElement == null) {
      return this.anySidebar;
    } else {
      return new SidebarController(SidebarModel$Companion_getInstance().invoke_2rdptt$(htmlElement), new SidebarViewWrapper(htmlElement));
    }
  };
  Object.defineProperty(SidebarController$Companion.prototype, 'anySidebar', {
    configurable: true,
    get: function () {
      return this.anySidebar_lmurw4$_0.value;
    }
  });
  function SidebarController$Companion$anySidebar$lambda() {
    return new SidebarController(SidebarModel$Companion_getInstance().invoke_ivxn3r$(), null);
  }
  SidebarController$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SidebarController$Companion_instance = null;
  function SidebarController$Companion_getInstance() {
    if (SidebarController$Companion_instance === null) {
      new SidebarController$Companion();
    }return SidebarController$Companion_instance;
  }
  SidebarController.prototype.didShowOrHide_dqye30$ = function (oldIsShown, newIsShown) {
    if (this.suppressChangeReactions_0) {
      return;
    }var view = this.view;
    if (view == null) {
      if (newIsShown) {
        SidebarViewWrapper$Companion_getInstance().defaultContainerElement.addClass(SidebarViewWrapper$Companion_getInstance().sidebarShownClassName);
      } else {
        SidebarViewWrapper$Companion_getInstance().defaultContainerElement.removeClass(SidebarViewWrapper$Companion_getInstance().sidebarShownClassName);
      }
    } else {
      view.isShown = newIsShown;
    }
  };
  function SidebarController$model$lambda(this$SidebarController) {
    return function (f, f_0, newModel) {
      this$SidebarController.didSetModel_0(newModel);
      return Unit;
    };
  }
  function SidebarController$view$lambda(this$SidebarController) {
    return function (f, f_0, newView) {
      this$SidebarController.didSetView_0(newView);
      return Unit;
    };
  }
  SidebarController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SidebarController',
    interfaces: [SidebarModelDelegate]
  };
  function loadFromView_0($receiver, view) {
    $receiver.isShown = view.isShown;
  }
  Delegates$observable$ObjectLiteral_1.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_1.prototype.constructor = Delegates$observable$ObjectLiteral_1;
  function Delegates$observable$ObjectLiteral_1(closure$onChange, initialValue) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue);
  }
  Delegates$observable$ObjectLiteral_1.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function SidebarModel(initIsShown) {
    SidebarModel$Companion_getInstance();
    if (initIsShown === void 0)
      initIsShown = false;
    this.isShown_vlygku$_0 = new Delegates$observable$ObjectLiteral_1(SidebarModel$isShown$lambda(this), initIsShown);
    this.delegate = null;
  }
  var SidebarModel$isShown_metadata = new PropertyMetadata('isShown');
  Object.defineProperty(SidebarModel.prototype, 'isShown', {
    configurable: true,
    get: function () {
      return this.isShown_vlygku$_0.getValue_lrcp0p$(this, SidebarModel$isShown_metadata);
    },
    set: function (isShown) {
      this.isShown_vlygku$_0.setValue_9rddgb$(this, SidebarModel$isShown_metadata, isShown);
    }
  });
  function SidebarModel$Companion() {
    SidebarModel$Companion_instance = this;
    this.existingModels_0 = LinkedHashMap_init();
  }
  SidebarModel$Companion.prototype.invoke_5m243s$ = function (viewWrapper) {
    return this.invoke_ivxn3r$(viewWrapper.htmlElement.id, viewWrapper.isShown);
  };
  SidebarModel$Companion.prototype.invoke_2rdptt$ = function (htmlElement) {
    return this.invoke_5m243s$(new SidebarViewWrapper(htmlElement));
  };
  function SidebarModel$Companion$invoke$lambda(closure$isShown) {
    return function () {
      return new SidebarModel(closure$isShown);
    };
  }
  SidebarModel$Companion.prototype.invoke_ivxn3r$ = function (id, isShown) {
    if (id === void 0)
      id = '';
    if (isShown === void 0)
      isShown = false;
    return get_0(this.existingModels_0, id, SidebarModel$Companion$invoke$lambda(isShown));
  };
  SidebarModel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SidebarModel$Companion_instance = null;
  function SidebarModel$Companion_getInstance() {
    if (SidebarModel$Companion_instance === null) {
      new SidebarModel$Companion();
    }return SidebarModel$Companion_instance;
  }
  function SidebarModel$isShown$lambda(this$SidebarModel) {
    return function (f, oldValue, newValue) {
      var tmp$;
      (tmp$ = this$SidebarModel.delegate) != null ? (tmp$.didShowOrHide_dqye30$(oldValue, newValue), Unit) : null;
      return Unit;
    };
  }
  SidebarModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SidebarModel',
    interfaces: []
  };
  function SidebarModelDelegate() {
  }
  SidebarModelDelegate.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SidebarModelDelegate',
    interfaces: []
  };
  function SidebarViewWrapper(htmlElement, containerElement) {
    SidebarViewWrapper$Companion_getInstance();
    if (containerElement === void 0)
      containerElement = SidebarViewWrapper$Companion_getInstance().defaultContainerElement;
    this.htmlElement_1oaz9d$_0 = htmlElement;
    this.containerElement_0 = containerElement;
    this.scrimHtmlElementGetter_0 = SidebarViewWrapper$Companion_getInstance().scrimElementGetter_r6ezyp$(this.containerElement_0);
    if (0 === this.scrimHtmlElementGetter_0().length) {
      this.containerElement_0.prepend(SidebarViewWrapper$Companion_getInstance().generateNewScrimHtmlString());
    }}
  Object.defineProperty(SidebarViewWrapper.prototype, 'htmlElement', {
    get: function () {
      return this.htmlElement_1oaz9d$_0;
    }
  });
  Object.defineProperty(SidebarViewWrapper.prototype, 'scrimHtmlElement', {
    configurable: true,
    get: function () {
      return this.scrimHtmlElementGetter_0();
    }
  });
  Object.defineProperty(SidebarViewWrapper.prototype, 'isShown', {
    configurable: true,
    get: function () {
      return this.containerElement_0.hasClass(SidebarViewWrapper$Companion_getInstance().sidebarShownClassName);
    },
    set: function (newValue) {
      newValue ? this.show_0() : this.hide_0();
    }
  });
  SidebarViewWrapper.prototype.hide_0 = function () {
    this.containerElement_0.removeClass(SidebarViewWrapper$Companion_getInstance().sidebarShownClassName);
  };
  SidebarViewWrapper.prototype.show_0 = function () {
    this.containerElement_0.addClass(SidebarViewWrapper$Companion_getInstance().sidebarShownClassName);
  };
  function SidebarViewWrapper$Companion() {
    SidebarViewWrapper$Companion_instance = this;
    this.className = 'sidebar';
    this.sidebarShownClassName = 'sidebar-shown';
    this.scrimElementClassName = 'sidebar-scrim';
    this.defaultContainerElement = $(':root');
  }
  function SidebarViewWrapper$Companion$scrimElementGetter$lambda(closure$containerElement) {
    return function () {
      return $('.sidebar-scrim', closure$containerElement);
    };
  }
  SidebarViewWrapper$Companion.prototype.scrimElementGetter_r6ezyp$ = function (containerElement) {
    return SidebarViewWrapper$Companion$scrimElementGetter$lambda(containerElement);
  };
  SidebarViewWrapper$Companion.prototype.generateNewScrimHtmlString = function () {
    return '<div class="sidebar-scrim"><\/div>';
  };
  SidebarViewWrapper$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SidebarViewWrapper$Companion_instance = null;
  function SidebarViewWrapper$Companion_getInstance() {
    if (SidebarViewWrapper$Companion_instance === null) {
      new SidebarViewWrapper$Companion();
    }return SidebarViewWrapper$Companion_instance;
  }
  SidebarViewWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SidebarViewWrapper',
    interfaces: [WrappedHtmlView]
  };
  function ThemeSwatchController(model, viewWrapper) {
    ThemeSwatchController$Companion_getInstance();
    this.model = model;
    this.viewWrapper = viewWrapper;
    $(this.viewWrapper.htmlElement).click(ThemeSwatchController_init$lambda(this));
  }
  ThemeSwatchController.prototype.setTheme_0 = function () {
    ThemeController_getInstance().setTheme_xxas9g$(invoke_8(ThemeModel$Companion_getInstance(), this.model));
  };
  function ThemeSwatchController$Companion() {
    ThemeSwatchController$Companion_instance = this;
  }
  ThemeSwatchController$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ThemeSwatchController$Companion_instance = null;
  function ThemeSwatchController$Companion_getInstance() {
    if (ThemeSwatchController$Companion_instance === null) {
      new ThemeSwatchController$Companion();
    }return ThemeSwatchController$Companion_instance;
  }
  function ThemeSwatchController_init$lambda(this$ThemeSwatchController) {
    return function (it) {
      this$ThemeSwatchController.setTheme_0();
      return Unit;
    };
  }
  ThemeSwatchController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThemeSwatchController',
    interfaces: []
  };
  function invoke($receiver, controlling) {
    var tmp$;
    var swatchElement = controlling;
    var view = new ThemeSwatchViewWrapper(swatchElement);
    tmp$ = invoke_1(ThemeSwatchModel$Companion_getInstance(), view);
    if (tmp$ == null) {
      return null;
    }var model = tmp$;
    return new ThemeSwatchController(model, view);
  }
  function ThemeSwatchModel() {
    ThemeSwatchModel$Companion_getInstance();
  }
  function ThemeSwatchModel$color(sheetName) {
    ThemeSwatchModel$color$Companion_getInstance();
    ThemeSwatchModel.call(this);
    this.sheetName = sheetName;
  }
  function ThemeSwatchModel$color$Companion() {
    ThemeSwatchModel$color$Companion_instance = this;
  }
  ThemeSwatchModel$color$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ThemeSwatchModel$color$Companion_instance = null;
  function ThemeSwatchModel$color$Companion_getInstance() {
    if (ThemeSwatchModel$color$Companion_instance === null) {
      new ThemeSwatchModel$color$Companion();
    }return ThemeSwatchModel$color$Companion_instance;
  }
  ThemeSwatchModel$color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'color',
    interfaces: [ThemeSwatchModel]
  };
  function ThemeSwatchModel$brightness(brightnessTier) {
    ThemeSwatchModel$brightness$Companion_getInstance();
    ThemeSwatchModel.call(this);
    this.brightnessTier = brightnessTier;
  }
  function ThemeSwatchModel$brightness$Companion() {
    ThemeSwatchModel$brightness$Companion_instance = this;
  }
  ThemeSwatchModel$brightness$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ThemeSwatchModel$brightness$Companion_instance = null;
  function ThemeSwatchModel$brightness$Companion_getInstance() {
    if (ThemeSwatchModel$brightness$Companion_instance === null) {
      new ThemeSwatchModel$brightness$Companion();
    }return ThemeSwatchModel$brightness$Companion_instance;
  }
  ThemeSwatchModel$brightness.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'brightness',
    interfaces: [ThemeSwatchModel]
  };
  function ThemeSwatchModel$Companion() {
    ThemeSwatchModel$Companion_instance = this;
  }
  ThemeSwatchModel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ThemeSwatchModel$Companion_instance = null;
  function ThemeSwatchModel$Companion_getInstance() {
    if (ThemeSwatchModel$Companion_instance === null) {
      new ThemeSwatchModel$Companion();
    }return ThemeSwatchModel$Companion_instance;
  }
  ThemeSwatchModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThemeSwatchModel',
    interfaces: []
  };
  function get_serialValue($receiver) {
    if (Kotlin.isType($receiver, ThemeSwatchModel$color))
      return ThemeColor$Companion_getInstance().serialKey + '.' + $receiver.sheetName;
    else if (Kotlin.isType($receiver, ThemeSwatchModel$brightness)) {
      ThemeBrightnessTier$Companion_getInstance();
      return 'brightness' + '.' + $receiver.brightnessTier;
    } else
      return Kotlin.noWhenBranchMatched();
  }
  function generateModel($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = $receiver.htmlElement.getAttribute(ThemeSwatchViewWrapper$Companion_getInstance().themeSwatchTypeAttributeName);
    if (tmp$ == null) {
      return null;
    }var swatchType = tmp$;
    tmp$_0 = $receiver.htmlElement.getAttribute(ThemeSwatchViewWrapper$Companion_getInstance().themeSwatchValueAttributeName);
    if (tmp$_0 == null) {
      return null;
    }var swatchValue = tmp$_0;
    if (equals(swatchType, ThemeColor$Companion_getInstance().serialKey))
      tmp$_1 = new ThemeSwatchModel$color(swatchValue);
    else {
      ThemeBrightnessTier$Companion_getInstance();
      if (equals(swatchType, 'brightness'))
        tmp$_1 = new ThemeSwatchModel$brightness(ThemeBrightnessTier$valueOf(swatchValue));
      else
        tmp$_1 = null;
    }
    return tmp$_1;
  }
  function get_colorSheetName($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, ThemeSwatchModel$color) ? tmp$ : null) != null ? tmp$_0.sheetName : null;
  }
  var existingModels;
  function invoke$lambda(closure$serialValue) {
    return function () {
      return ThemeBrightnessTier$valueOf(closure$serialValue);
    };
  }
  function invoke_0($receiver, serialValue) {
    var tmp$;
    tmp$ = tryOrNull(invoke$lambda(serialValue));
    if (tmp$ == null) {
      return null;
    }return new ThemeSwatchModel$brightness(tmp$);
  }
  function invoke_1($receiver, viewWrapper) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = ThemeSwatchModel$Companion_getInstance();
    var $receiver_0 = viewWrapper.htmlElement.id;
    tmp$ = $receiver_0.length === 0 ? null : $receiver_0;
    tmp$_0 = generateModel(viewWrapper);
    if (tmp$_0 == null) {
      return null;
    }return invoke_3(tmp$_1, tmp$, tmp$_0);
  }
  function invoke_2($receiver, htmlElement) {
    return invoke_1(ThemeSwatchModel$Companion_getInstance(), new ThemeSwatchViewWrapper(htmlElement));
  }
  function invoke$lambda_0(closure$model) {
    return function () {
      return closure$model;
    };
  }
  function invoke_3($receiver, id, model) {
    if (id === void 0)
      id = null;
    return get_0(existingModels, id != null ? id : get_serialValue(model), invoke$lambda_0(model));
  }
  function ThemeSwatchViewWrapper(htmlElement) {
    ThemeSwatchViewWrapper$Companion_getInstance();
    this.htmlElement_cqptz5$_0 = htmlElement;
  }
  Object.defineProperty(ThemeSwatchViewWrapper.prototype, 'htmlElement', {
    get: function () {
      return this.htmlElement_cqptz5$_0;
    }
  });
  function ThemeSwatchViewWrapper$Companion() {
    ThemeSwatchViewWrapper$Companion_instance = this;
    this.themeSwatchCssSelector = '[theme-swatch-type]';
    this.themeSwatchTypeAttributeName = 'theme-swatch-type';
    this.themeSwatchValueAttributeName = 'theme-swatch-value';
  }
  ThemeSwatchViewWrapper$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ThemeSwatchViewWrapper$Companion_instance = null;
  function ThemeSwatchViewWrapper$Companion_getInstance() {
    if (ThemeSwatchViewWrapper$Companion_instance === null) {
      new ThemeSwatchViewWrapper$Companion();
    }return ThemeSwatchViewWrapper$Companion_instance;
  }
  ThemeSwatchViewWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThemeSwatchViewWrapper',
    interfaces: [WrappedHtmlView]
  };
  function main$lambda(it) {
    Setup_getInstance().performCommonPageConnections();
    Setup_getInstance().reloadStates();
    Setup_getInstance().showJsOnlyElements();
    return Unit;
  }
  function main(args) {
    $(document).ready(main$lambda);
  }
  function Setup() {
    Setup_instance = this;
    this.sidebarButtonControllers_0 = ArrayList_init();
    this.themeSwatchControllers_0 = ArrayList_init();
  }
  Setup.prototype.performCommonPageConnections = function () {
    this.downloadJQuery_0();
    this.connectAllSidebarsToSidebarButtons_0();
    this.connectAllThemeSwatches_0();
    this.allowElementReplacers_0();
    this.connectInputBasedContentTransformers_0();
  };
  Setup.prototype.downloadJQuery_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (jQuery === undefined) {
      tmp$_0 = Kotlin.isType(tmp$ = document.createElement('script'), HTMLScriptElement) ? tmp$ : null;
      if (tmp$_0 == null) {
        return console.error('Could not create script element');
      }var script = tmp$_0;
      script.src = '//code.jquery.com/jquery-3.x-git.slim.min.js';
      script.type = 'text/javascript';
      (tmp$_2 = (tmp$_1 = document.getElementsByTagName('head')[0]) != null ? tmp$_1.appendChild(script) : null) != null ? tmp$_2 : (console.error('Could not find head element'), Unit);
    }};
  function Setup$connectAllSidebarsToSidebarButtons$lambda(f, sidebarButtonElement) {
    var tmp$;
    var specifiedSidebarId = (tmp$ = sidebarButtonElement.getAttributeNode('for')) != null ? tmp$.value : null;
    if (specifiedSidebarId != null) {
      var sidebarElement = $('#' + toString(specifiedSidebarId)).get(0);
      if (sidebarElement != null) {
        return new SidebarButtonController(ButtonController_init(sidebarButtonElement), SidebarController$Companion_getInstance().invoke_ejp6n4$(sidebarElement));
      }}return new SidebarButtonController(ButtonController_init(sidebarButtonElement), SidebarController$Companion_getInstance().invoke_ejp6n4$($('.sidebar').get(0)));
  }
  Setup.prototype.connectAllSidebarsToSidebarButtons_0 = function () {
    addAll(this.sidebarButtonControllers_0, $('.show-sidebar-button').map(Setup$connectAllSidebarsToSidebarButtons$lambda));
  };
  function Setup$connectAllThemeSwatches$lambda(f, themeSwatchElement) {
    return invoke(ThemeSwatchController$Companion_getInstance(), themeSwatchElement);
  }
  Setup.prototype.connectAllThemeSwatches_0 = function () {
    this.themeSwatchControllers_0.addAll_brywnq$(filterNotNull($(ThemeSwatchViewWrapper$Companion_getInstance().themeSwatchCssSelector).map(Setup$connectAllThemeSwatches$lambda)));
  };
  function Setup$allowElementReplacers$lambda(selector, replacer) {
    ContentReplacers_getInstance().connectNewContentReplacer_v0uu45$(selector, replacer);
  }
  Setup.prototype.allowElementReplacers_0 = function () {
    document.addContentReplacer = Setup$allowElementReplacers$lambda;
  };
  function Setup$connectInputBasedContentTransformers$lambda(event) {
    var tmp$, tmp$_0;
    if ((tmp$_0 = Kotlin.isType(tmp$ = event != null ? event.currentTarget : null, HTMLInputElement) ? tmp$ : null) != null) {
      var tmp$_1;
      if ((tmp$_1 = tmp$_0.dataset['applyClassToRootWhenChecked']) != null) {
        $(':root').toggleClass(tmp$_1, tmp$_0.checked);
      }}return Unit;
  }
  Setup.prototype.connectInputBasedContentTransformers_0 = function () {
    $('[data-apply-class-to-root-when-checked]').change(Setup$connectInputBasedContentTransformers$lambda);
  };
  Setup.prototype.reloadStates = function () {
    this.reloadTheme_0();
  };
  Setup.prototype.reloadTheme_0 = function () {
    ThemeController_getInstance().reloadTheme();
  };
  Setup.prototype.showJsOnlyElements = function () {
    $('.show-only-when-js-is-enabled').removeClass('show-only-when-js-is-enabled');
  };
  Setup.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Setup',
    interfaces: []
  };
  var Setup_instance = null;
  function Setup_getInstance() {
    if (Setup_instance === null) {
      new Setup();
    }return Setup_instance;
  }
  function LocalStorage() {
    LocalStorage_instance = this;
    AbstractMutableCollection.call(this);
  }
  LocalStorage.prototype.get_61zpoe$ = function (keyName) {
    return window.localStorage.getItem(keyName);
  };
  LocalStorage.prototype.set_jyasbz$ = function (keyName, newValue) {
    if (newValue == null) {
      window.localStorage.removeItem(keyName);
    } else {
      window.localStorage.setItem(keyName, newValue);
    }
  };
  LocalStorage.prototype.clear = function () {
    window.localStorage.clear();
  };
  Object.defineProperty(LocalStorage.prototype, 'size', {
    configurable: true,
    get: function () {
      return window.localStorage.length;
    }
  });
  function LocalStorage$iterator$ObjectLiteral() {
    this.index = 0;
  }
  LocalStorage$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.index < LocalStorage_getInstance().size;
  };
  LocalStorage$iterator$ObjectLiteral.prototype.next = function () {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = invoke_5(StoragePair$Companion_getInstance(), window.localStorage, this.index)) != null) {
      this.index = this.index + 1 | 0;
      tmp$_1 = tmp$;
    } else
      tmp$_1 = null;
    var tmp$_2;
    if ((tmp$_0 = tmp$_1) != null)
      tmp$_2 = tmp$_0;
    else {
      throw IllegalStateException_init(('Local storage broke its contract that there was an item at index ' + this.index).toString());
    }
    return tmp$_2;
  };
  LocalStorage$iterator$ObjectLiteral.prototype.remove = function () {
    var tmp$, tmp$_0;
    tmp$_0 = window.localStorage;
    var tmp$_1;
    if ((tmp$ = window.localStorage.key(this.index)) != null)
      tmp$_1 = tmp$;
    else {
      throw IllegalStateException_init(('Local storage broke its contract that there was an item at index ' + this.index).toString());
    }
    tmp$_0.removeItem(tmp$_1);
  };
  LocalStorage$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MutableIterator]
  };
  LocalStorage.prototype.iterator = function () {
    return new LocalStorage$iterator$ObjectLiteral();
  };
  LocalStorage.prototype.add_11rb$ = function (element) {
    window.localStorage.setItem(element.keyName, element.value);
    return true;
  };
  LocalStorage.prototype.remove_11rb$ = function (element) {
    if (window.localStorage.getItem(element.keyName) == null) {
      return false;
    } else {
      window.localStorage.removeItem(element.keyName);
      return true;
    }
  };
  LocalStorage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LocalStorage',
    interfaces: [AbstractMutableCollection]
  };
  var LocalStorage_instance = null;
  function LocalStorage_getInstance() {
    if (LocalStorage_instance === null) {
      new LocalStorage();
    }return LocalStorage_instance;
  }
  function invoke_4($receiver, namespace) {
    return new NamespacedLocalStorage(namespace);
  }
  function get_blueHusky($receiver) {
    return new NamespacedLocalStorage('org.bh');
  }
  function NamespacedLocalStorage(namespace) {
    this.namespace = namespace;
  }
  NamespacedLocalStorage.prototype.namespaced_0 = function ($receiver) {
    return this.namespace + '.' + $receiver;
  };
  NamespacedLocalStorage.prototype.isInNamespace_0 = function ($receiver) {
    return startsWith($receiver, this.namespace);
  };
  NamespacedLocalStorage.prototype.get_61zpoe$ = function (keyName) {
    return LocalStorage_getInstance().get_61zpoe$(this.namespaced_0(keyName));
  };
  NamespacedLocalStorage.prototype.set_jyasbz$ = function (keyName, newValue) {
    LocalStorage_getInstance().set_jyasbz$(this.namespaced_0(keyName), newValue);
  };
  NamespacedLocalStorage.prototype.clear = function () {
    var $receiver = LocalStorage_getInstance();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (this.isInNamespace_0(element.keyName))
        destination.add_11rb$(element);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      LocalStorage_getInstance().set_jyasbz$(element_0.keyName, null);
    }
  };
  NamespacedLocalStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamespacedLocalStorage',
    interfaces: []
  };
  function StoragePair(keyName, value) {
    StoragePair$Companion_getInstance();
    this.keyName = keyName;
    this.value = value;
  }
  function StoragePair$Companion() {
    StoragePair$Companion_instance = this;
  }
  StoragePair$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StoragePair$Companion_instance = null;
  function StoragePair$Companion_getInstance() {
    if (StoragePair$Companion_instance === null) {
      new StoragePair$Companion();
    }return StoragePair$Companion_instance;
  }
  StoragePair.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StoragePair',
    interfaces: []
  };
  StoragePair.prototype.component1 = function () {
    return this.keyName;
  };
  StoragePair.prototype.component2 = function () {
    return this.value;
  };
  StoragePair.prototype.copy_puj7f4$ = function (keyName, value) {
    return new StoragePair(keyName === void 0 ? this.keyName : keyName, value === void 0 ? this.value : value);
  };
  StoragePair.prototype.toString = function () {
    return 'StoragePair(keyName=' + Kotlin.toString(this.keyName) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  StoragePair.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.keyName) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  StoragePair.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.keyName, other.keyName) && Kotlin.equals(this.value, other.value)))));
  };
  function invoke_5($receiver, from, at) {
    var tmp$, tmp$_0;
    var storage = from;
    var index = at;
    tmp$ = from.key(index);
    if (tmp$ == null) {
      return null;
    }var keyName = tmp$;
    tmp$_0 = storage.getItem(keyName);
    if (tmp$_0 == null) {
      return null;
    }return new StoragePair(keyName, tmp$_0);
  }
  function get_0($receiver, key, backupValue) {
    var tmp$;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var answer = backupValue();
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  }
  var get_groups = defineInlineFunction('BHStudios General Scripts.org.bh.scripts.general.utilities.get_groups_tgewol$', function ($receiver) {
    return $receiver.groups;
  });
  function get_isCapitalized($receiver) {
    var tmp$ = !($receiver.length === 0);
    if (tmp$) {
      var $receiver_0 = $receiver.charCodeAt(0);
      tmp$ = toChar(String.fromCharCode($receiver_0 | 0).toUpperCase().charCodeAt(0)) === $receiver.charCodeAt(0);
    }return tmp$;
  }
  function tryOrNull(danger) {
    try {
      return danger();
    } catch (_) {
      if (Kotlin.isType(_, Throwable)) {
        return null;
      } else
        throw _;
    }
  }
  function ContentReplacers() {
    ContentReplacers_instance = this;
    this.contentReplacers_0 = LinkedHashMap_init();
  }
  ContentReplacers.prototype.connectNewContentReplacer_v0uu45$ = function (selector, replacer) {
    this.contentReplacers_0.put_xwzc9p$(selector, replacer);
    this.runContentReplacers_0();
  };
  ContentReplacers.prototype.runContentReplacers_0 = function () {
    var tmp$;
    tmp$ = this.contentReplacers_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      connectAndRun(element);
    }
  };
  ContentReplacers.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ContentReplacers',
    interfaces: []
  };
  var ContentReplacers_instance = null;
  function ContentReplacers_getInstance() {
    if (ContentReplacers_instance === null) {
      new ContentReplacers();
    }return ContentReplacers_instance;
  }
  function connectAndRun($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var contentReplacerSelectorUi = $('[data-replaced-element-selector=' + '"' + $receiver.key + '"' + ']');
    if (contentReplacerSelectorUi.length < 1) {
      return;
    }tmp$_0 = typeof (tmp$ = contentReplacerSelectorUi.data('content-replacer-data-source')) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return;
    }var contentReplacerDataSourceDataKey = tmp$_0;
    tmp$_2 = typeof (tmp$_1 = contentReplacerSelectorUi.data('content-replacer-data-replacement')) === 'string' ? tmp$_1 : null;
    if (tmp$_2 == null) {
      return;
    }var contentReplacerDataReplacementDataKey = tmp$_2;
    var contentReplacerDataReplacementSelector = '[data-' + contentReplacerDataReplacementDataKey + ']';
    connectButtons($receiver, contentReplacerDataSourceDataKey, contentReplacerDataReplacementSelector, contentReplacerDataReplacementDataKey);
    run($receiver, contentReplacerDataSourceDataKey, contentReplacerDataReplacementSelector, contentReplacerDataReplacementDataKey);
  }
  function connectButtons$lambda(closure$contentReplacerDataReplacementSelector, this$connectButtons, closure$contentReplacerDataSourceDataKey, closure$contentReplacerDataReplacementDataKey) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = it.currentTarget, Element) ? tmp$ : null;
      if (tmp$_0 == null) {
        return;
      }var currentTarget = tmp$_0;
      clearSelection(this$connectButtons, closure$contentReplacerDataReplacementSelector);
      select(this$connectButtons, currentTarget);
      run(this$connectButtons, closure$contentReplacerDataSourceDataKey, closure$contentReplacerDataReplacementSelector, closure$contentReplacerDataReplacementDataKey);
      return Unit;
    };
  }
  function connectButtons($receiver, contentReplacerDataSourceDataKey, contentReplacerDataReplacementSelector, contentReplacerDataReplacementDataKey) {
    $(contentReplacerDataReplacementSelector).click(connectButtons$lambda(contentReplacerDataReplacementSelector, $receiver, contentReplacerDataSourceDataKey, contentReplacerDataReplacementDataKey));
  }
  function clearSelection($receiver, contentReplacerDataReplacementSelector) {
    var tmp$;
    $(contentReplacerDataReplacementSelector).attr('selected', (tmp$ = null) == null || typeof tmp$ === 'string' ? tmp$ : throwCCE());
  }
  function select($receiver, element) {
    $(element).attr('selected', true);
  }
  function run$lambda(closure$contentReplacerDataSourceDataKey, this$run, closure$userSelectedDataReplacement) {
    return function (f, element) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
      tmp$_0 = typeof (tmp$ = $(element).data(closure$contentReplacerDataSourceDataKey)) === 'string' ? tmp$ : null;
      if (tmp$_0 == null) {
        return;
      }var contentReplacerDataSource = tmp$_0;
      var result = get_replacer(this$run)(contentReplacerDataSource, closure$userSelectedDataReplacement);
      var newTextContent;
      if (typeof result === 'object') {
        var jsonResult = Kotlin.isType(tmp$_1 = result, Object) ? tmp$_1 : throwCCE();
        tmp$_3 = typeof (tmp$_2 = jsonResult['text']) === 'string' ? tmp$_2 : null;
        if (tmp$_3 == null) {
          return;
        }var rawNewTextContent = tmp$_3;
        var originalTextContent = element.textContent;
        if (originalTextContent != null) {
          var maintainOriginalCapitalization = (tmp$_5 = typeof (tmp$_4 = jsonResult['maintainOriginalCapitalization']) === 'boolean' ? tmp$_4 : null) != null ? tmp$_5 : false;
          if (maintainOriginalCapitalization) {
            if (get_isCapitalized(originalTextContent)) {
              tmp$_6 = capitalize(rawNewTextContent);
            } else {
              tmp$_6 = decapitalize(rawNewTextContent);
            }
          } else {
            tmp$_6 = rawNewTextContent;
          }
          newTextContent = tmp$_6;
        } else {
          newTextContent = rawNewTextContent;
        }
      } else {
        newTextContent = (tmp$_8 = typeof (tmp$_7 = result) === 'string' ? tmp$_7 : null) != null ? tmp$_8 : result.toString();
      }
      element.textContent = newTextContent;
      return Unit;
    };
  }
  function run($receiver, contentReplacerDataSourceDataKey, contentReplacerDataReplacementSelector, contentReplacerDataReplacementDataKey) {
    var tmp$, tmp$_0;
    var userSelectedContentReplacement = $(contentReplacerDataReplacementSelector + '[selected]');
    if (userSelectedContentReplacement.length !== 1) {
      return;
    }tmp$_0 = typeof (tmp$ = userSelectedContentReplacement.data(contentReplacerDataReplacementDataKey)) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return;
    }var userSelectedDataReplacement = tmp$_0;
    var elementsWithContentToBeReplaced = $($receiver.key);
    elementsWithContentToBeReplaced.each(run$lambda(contentReplacerDataSourceDataKey, $receiver, userSelectedDataReplacement));
  }
  function get_selectorForAllElementsWithContentToBeReplaced($receiver) {
    return $receiver.key;
  }
  function get_replacer($receiver) {
    return $receiver.value;
  }
  function ThemeBrightnessTier(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ThemeBrightnessTier_initFields() {
    ThemeBrightnessTier_initFields = function () {
    };
    ThemeBrightnessTier$black_instance = new ThemeBrightnessTier('black', 0);
    ThemeBrightnessTier$dark_instance = new ThemeBrightnessTier('dark', 1);
    ThemeBrightnessTier$light_instance = new ThemeBrightnessTier('light', 2);
    ThemeBrightnessTier$white_instance = new ThemeBrightnessTier('white', 3);
    ThemeBrightnessTier$Companion_getInstance();
  }
  var ThemeBrightnessTier$black_instance;
  function ThemeBrightnessTier$black_getInstance() {
    ThemeBrightnessTier_initFields();
    return ThemeBrightnessTier$black_instance;
  }
  var ThemeBrightnessTier$dark_instance;
  function ThemeBrightnessTier$dark_getInstance() {
    ThemeBrightnessTier_initFields();
    return ThemeBrightnessTier$dark_instance;
  }
  var ThemeBrightnessTier$light_instance;
  function ThemeBrightnessTier$light_getInstance() {
    ThemeBrightnessTier_initFields();
    return ThemeBrightnessTier$light_instance;
  }
  var ThemeBrightnessTier$white_instance;
  function ThemeBrightnessTier$white_getInstance() {
    ThemeBrightnessTier_initFields();
    return ThemeBrightnessTier$white_instance;
  }
  function ThemeBrightnessTier$Companion() {
    ThemeBrightnessTier$Companion_instance = this;
  }
  Object.defineProperty(ThemeBrightnessTier$Companion.prototype, 'default', {
    configurable: true,
    get: defineInlineFunction('BHStudios General Scripts.org.bh.scripts.theming.ThemeBrightnessTier.Companion.get_default', wrapFunction(function () {
      var ThemeBrightnessTier = _.org.bh.scripts.theming.ThemeBrightnessTier;
      return function () {
        return ThemeBrightnessTier.light;
      };
    }))
  });
  ThemeBrightnessTier$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ThemeBrightnessTier$Companion_instance = null;
  function ThemeBrightnessTier$Companion_getInstance() {
    ThemeBrightnessTier_initFields();
    if (ThemeBrightnessTier$Companion_instance === null) {
      new ThemeBrightnessTier$Companion();
    }return ThemeBrightnessTier$Companion_instance;
  }
  ThemeBrightnessTier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThemeBrightnessTier',
    interfaces: [Enum]
  };
  function ThemeBrightnessTier$values() {
    return [ThemeBrightnessTier$black_getInstance(), ThemeBrightnessTier$dark_getInstance(), ThemeBrightnessTier$light_getInstance(), ThemeBrightnessTier$white_getInstance()];
  }
  ThemeBrightnessTier.values = ThemeBrightnessTier$values;
  function ThemeBrightnessTier$valueOf(name) {
    switch (name) {
      case 'black':
        return ThemeBrightnessTier$black_getInstance();
      case 'dark':
        return ThemeBrightnessTier$dark_getInstance();
      case 'light':
        return ThemeBrightnessTier$light_getInstance();
      case 'white':
        return ThemeBrightnessTier$white_getInstance();
      default:throwISE('No enum constant org.bh.scripts.theming.ThemeBrightnessTier.' + name);
    }
  }
  ThemeBrightnessTier.valueOf_61zpoe$ = ThemeBrightnessTier$valueOf;
  function get_className_0($receiver) {
    return 'brightness-' + $receiver.name;
  }
  var get_serialKey = defineInlineFunction('BHStudios General Scripts.org.bh.scripts.theming.get_serialKey_yxqlj5$', function ($receiver) {
    return 'brightness';
  });
  var get_serialValue_0 = defineInlineFunction('BHStudios General Scripts.org.bh.scripts.theming.get_serialValue_aarxa7$', function ($receiver) {
    return $receiver.name;
  });
  function initFromPage($receiver) {
    var $receiver_0 = ThemeBrightnessTier$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        if ($(':root').hasClass(get_className_0(element))) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  }
  function invoke_6($receiver, serialValue) {
    var $receiver_0 = ThemeBrightnessTier$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        if (equals(element.name, serialValue)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  }
  function ThemeColor(name, sheetSuffix) {
    ThemeColor$Companion_getInstance();
    if (sheetSuffix === void 0)
      sheetSuffix = name;
    this.name = name;
    this.sheetSuffix = sheetSuffix.toLowerCase();
  }
  Object.defineProperty(ThemeColor.prototype, 'themeUrl', {
    configurable: true,
    get: function () {
      return this.stylesheetUrl_0();
    }
  });
  ThemeColor.prototype.stylesheetFileName_0 = function () {
    return ThemeColor$Companion_getInstance().stylesheetNamePrefix_0 + this.sheetSuffix + ThemeColor$Companion_getInstance().stylesheetNameSuffix_0;
  };
  ThemeColor.prototype.stylesheetUrl_0 = function () {
    return ThemeColor$Companion_getInstance().stylesheetBaseUrl_0 + '/' + this.stylesheetFileName_0();
  };
  function ThemeColor$Companion() {
    ThemeColor$Companion_instance = this;
    this.stylesheetsProtocol_0 = 'https';
    this.stylesheetsDomain_0 = 'stylesheets.bhstudios.org';
    this.stylesheetsDirectoryPath_0 = 'assets/v2/neon';
    this.stylesheetNamePrefix_0 = 'neon-';
    this.stylesheetNameSuffix_0 = '.css';
    this.stylesheetBaseUrl_0 = 'https://stylesheets.bhstudios.org/assets/v2/neon';
    this.stylesheetRegexPatternColorGroupName_8be2vx$ = 'color';
    this.stylesheetUrlRegexPattern_0 = '^https://stylesheets.bhstudios.org/assets/v2/neon/neon-(?<color>.+?).css';
    this.stylesheetUrlRegex_8be2vx$_fkfzjy$_0 = lazy(ThemeColor$Companion$stylesheetUrlRegex$lambda(this));
    this.serialKey = 'color';
  }
  Object.defineProperty(ThemeColor$Companion.prototype, 'stylesheetUrlRegex_8be2vx$', {
    configurable: true,
    get: function () {
      return this.stylesheetUrlRegex_8be2vx$_fkfzjy$_0.value;
    }
  });
  function ThemeColor$Companion$stylesheetUrlRegex$lambda(this$ThemeColor$) {
    return function () {
      return new RegExp(this$ThemeColor$.stylesheetUrlRegexPattern_0);
    };
  }
  ThemeColor$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ThemeColor$Companion_instance = null;
  function ThemeColor$Companion_getInstance() {
    if (ThemeColor$Companion_instance === null) {
      new ThemeColor$Companion();
    }return ThemeColor$Companion_instance;
  }
  ThemeColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThemeColor',
    interfaces: []
  };
  function get_serialValue_1($receiver) {
    return $receiver.name;
  }
  function get_default($receiver) {
    return new ThemeColor('Water');
  }
  function initFromPage_0($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_0 = typeof (tmp$ = $(ThemeController_getInstance().themeSheetLinkElementSelector).attr('href')) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }var stylesheetUrl = tmp$_0;
    tmp$_1 = $receiver.stylesheetUrlRegex_8be2vx$.exec(stylesheetUrl);
    if (tmp$_1 == null) {
      return null;
    }var match = tmp$_1;
    tmp$_3 = typeof (tmp$_2 = match.groups[$receiver.stylesheetRegexPatternColorGroupName_8be2vx$]) === 'string' ? tmp$_2 : null;
    if (tmp$_3 == null) {
      return null;
    }var colorName = tmp$_3;
    return new ThemeColor(colorName);
  }
  function ThemeController() {
    ThemeController_instance = this;
    this.themeKey = 'theme';
    this.themeSheetLinkElementSelector = 'link#theme-stylesheet';
    this.frameworkSheetLinkElementSelector = 'link#framework-stylesheet';
  }
  ThemeController.prototype.reloadTheme = function () {
    var tmp$;
    if ((tmp$ = this.loadTheme()) != null) {
      getCallableRef('setTheme', function ($receiver, p1) {
        return $receiver.setTheme_xxas9g$(p1), Unit;
      }.bind(null, this))(tmp$);
    }};
  ThemeController.prototype.saveTheme_xxas9g$ = function (model) {
    var tmp$, tmp$_0;
    var serialModel = (tmp$_0 = (tmp$ = this.loadTheme()) != null ? getCallableRef('fillingInMissingData', function ($receiver, p1) {
      return fillingInMissingData($receiver, p1);
    }.bind(null, model))(tmp$) : null) != null ? tmp$_0 : model;
    get_blueHusky(LocalStorage_getInstance()).set_jyasbz$(this.themeKey, serialModel.serialValue);
  };
  ThemeController.prototype.setTheme_xxas9g$ = function (model) {
    var tmp$, tmp$_0;
    if ((tmp$ = model.color) != null) {
      getCallableRef('setColor', function ($receiver, p1) {
        return $receiver.setColor_y2sk0q$(p1), Unit;
      }.bind(null, this))(tmp$);
    }if ((tmp$_0 = model.brightnessTier) != null) {
      getCallableRef('setBrightness', function ($receiver, p1) {
        return $receiver.setBrightness_9hws1c$(p1), Unit;
      }.bind(null, this))(tmp$_0);
    }this.saveTheme_xxas9g$(model);
  };
  ThemeController.prototype.loadTheme = function () {
    var tmp$;
    return (tmp$ = get_blueHusky(LocalStorage_getInstance()).get_61zpoe$(this.themeKey)) != null ? invoke_7(ThemeModel$Companion_getInstance(), tmp$) : null;
  };
  ThemeController.prototype.setColor_y2sk0q$ = function (newColor) {
    $(this.themeSheetLinkElementSelector).attr('href', newColor.themeUrl);
  };
  ThemeController.prototype.setBrightness_9hws1c$ = function (newBrightness) {
    $(':root').removeClass(joinToString(ThemeBrightnessTier$values(), ' ', void 0, void 0, void 0, void 0, getPropertyCallableRef('className', 1, function ($receiver) {
      return get_className_0($receiver);
    }))).addClass(get_className_0(newBrightness));
  };
  ThemeController.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ThemeController',
    interfaces: []
  };
  var ThemeController_instance = null;
  function ThemeController_getInstance() {
    if (ThemeController_instance === null) {
      new ThemeController();
    }return ThemeController_instance;
  }
  function ThemeModel(color, brightnessTier) {
    ThemeModel$Companion_getInstance();
    this.color = color;
    this.brightnessTier = brightnessTier;
  }
  Object.defineProperty(ThemeModel.prototype, 'serialValue', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_0 = to(ThemeColor$Companion_getInstance().serialKey, (tmp$ = this.color) != null ? get_serialValue_1(tmp$) : null);
      ThemeBrightnessTier$Companion_getInstance();
      return JSON.stringify(json([tmp$_0, to('brightness', (tmp$_1 = this.brightnessTier) != null ? tmp$_1.name : null)]));
    }
  });
  function ThemeModel$Companion() {
    ThemeModel$Companion_instance = this;
  }
  ThemeModel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ThemeModel$Companion_instance = null;
  function ThemeModel$Companion_getInstance() {
    if (ThemeModel$Companion_instance === null) {
      new ThemeModel$Companion();
    }return ThemeModel$Companion_instance;
  }
  ThemeModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThemeModel',
    interfaces: []
  };
  ThemeModel.prototype.component1 = function () {
    return this.color;
  };
  ThemeModel.prototype.component2 = function () {
    return this.brightnessTier;
  };
  ThemeModel.prototype.copy_ek5dvg$ = function (color, brightnessTier) {
    return new ThemeModel(color === void 0 ? this.color : color, brightnessTier === void 0 ? this.brightnessTier : brightnessTier);
  };
  ThemeModel.prototype.toString = function () {
    return 'ThemeModel(color=' + Kotlin.toString(this.color) + (', brightnessTier=' + Kotlin.toString(this.brightnessTier)) + ')';
  };
  ThemeModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    result = result * 31 + Kotlin.hashCode(this.brightnessTier) | 0;
    return result;
  };
  ThemeModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.color, other.color) && Kotlin.equals(this.brightnessTier, other.brightnessTier)))));
  };
  function invoke_7($receiver, serialValue) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var json = JSON.parse(serialValue);
    var color = (tmp$_1 = (tmp$_0 = typeof (tmp$ = json[ThemeColor$Companion_getInstance().serialKey]) === 'string' ? tmp$ : null) != null ? new ThemeColor(tmp$_0) : null) != null ? tmp$_1 : get_default(ThemeColor$Companion_getInstance());
    ThemeBrightnessTier$Companion_getInstance();
    var brightnessTier = (tmp$_4 = (tmp$_3 = typeof (tmp$_2 = json['brightness']) === 'string' ? tmp$_2 : null) != null ? invoke_6(ThemeBrightnessTier$Companion_getInstance(), tmp$_3) : null) != null ? tmp$_4 : ThemeBrightnessTier.light;
    return new ThemeModel(color, brightnessTier);
  }
  function invoke_8($receiver, swatchModel, getMissingData) {
    if (getMissingData === void 0)
      getMissingData = false;
    var tmp$;
    if (Kotlin.isType(swatchModel, ThemeSwatchModel$color))
      tmp$ = invoke_9(ThemeModel$Companion_getInstance(), swatchModel, getMissingData);
    else if (Kotlin.isType(swatchModel, ThemeSwatchModel$brightness))
      tmp$ = invoke_10(ThemeModel$Companion_getInstance(), swatchModel, getMissingData);
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  }
  function invoke_9($receiver, swatchColorModel, getMissingData) {
    var tmp$;
    return new ThemeModel(new ThemeColor(swatchColorModel.sheetName), getMissingData ? (tmp$ = initFromPage(ThemeBrightnessTier$Companion_getInstance())) != null ? tmp$ : ThemeBrightnessTier.light : null);
  }
  function invoke_10($receiver, swatchBrightnessModel, getMissingData) {
    var tmp$;
    return new ThemeModel(getMissingData ? (tmp$ = initFromPage_0(ThemeColor$Companion_getInstance())) != null ? tmp$ : get_default(ThemeColor$Companion_getInstance()) : null, swatchBrightnessModel.brightnessTier);
  }
  function fillingInMissingData($receiver, other) {
    var tmp$, tmp$_0;
    return new ThemeModel((tmp$ = $receiver.color) != null ? tmp$ : other.color, (tmp$_0 = $receiver.brightnessTier) != null ? tmp$_0 : other.brightnessTier);
  }
  var package$jQueryInterface = _.jQueryInterface || (_.jQueryInterface = {});
  package$jQueryInterface.get_parentElement_s15u7w$ = get_parentElement;
  var package$org = _.org || (_.org = {});
  var package$bh = package$org.bh || (package$org.bh = {});
  var package$scripts = package$bh.scripts || (package$bh.scripts = {});
  var package$components = package$scripts.components || (package$scripts.components = {});
  package$components.WrappedHtmlView = WrappedHtmlView;
  package$components.get_className_tfpif4$ = get_className;
  package$components.addClass_k46ymz$ = addClass_0;
  package$components.removeClass_k46ymz$ = removeClass_0;
  package$components.hasClass_6ab3ni$ = hasClass_0;
  var package$button = package$components.button || (package$components.button = {});
  package$button.ButtonController_init_2rdptt$ = ButtonController_init;
  package$button.ButtonController = ButtonController;
  package$button.loadFromView_usb97w$ = loadFromView;
  Object.defineProperty(ButtonModel, 'Companion', {
    get: ButtonModel$Companion_getInstance
  });
  package$button.ButtonModel = ButtonModel;
  package$button.ButtonModelDelegate = ButtonModelDelegate;
  package$button.ButtonViewWrapper = ButtonViewWrapper;
  Object.defineProperty(SidebarButtonController, 'Companion', {
    get: SidebarButtonController$Companion_getInstance
  });
  var package$sidebar = package$components.sidebar || (package$components.sidebar = {});
  package$sidebar.SidebarButtonController = SidebarButtonController;
  Object.defineProperty(SidebarController, 'Companion', {
    get: SidebarController$Companion_getInstance
  });
  package$sidebar.SidebarController = SidebarController;
  package$sidebar.loadFromView_wkxucs$ = loadFromView_0;
  Object.defineProperty(SidebarModel, 'Companion', {
    get: SidebarModel$Companion_getInstance
  });
  package$sidebar.SidebarModel = SidebarModel;
  package$sidebar.SidebarModelDelegate = SidebarModelDelegate;
  Object.defineProperty(SidebarViewWrapper, 'Companion', {
    get: SidebarViewWrapper$Companion_getInstance
  });
  package$sidebar.SidebarViewWrapper = SidebarViewWrapper;
  Object.defineProperty(ThemeSwatchController, 'Companion', {
    get: ThemeSwatchController$Companion_getInstance
  });
  var package$themeSwatches = package$components.themeSwatches || (package$components.themeSwatches = {});
  package$themeSwatches.ThemeSwatchController = ThemeSwatchController;
  package$themeSwatches.invoke_28zv7k$ = invoke;
  Object.defineProperty(ThemeSwatchModel$color, 'Companion', {
    get: ThemeSwatchModel$color$Companion_getInstance
  });
  ThemeSwatchModel.color = ThemeSwatchModel$color;
  Object.defineProperty(ThemeSwatchModel$brightness, 'Companion', {
    get: ThemeSwatchModel$brightness$Companion_getInstance
  });
  ThemeSwatchModel.brightness = ThemeSwatchModel$brightness;
  Object.defineProperty(ThemeSwatchModel, 'Companion', {
    get: ThemeSwatchModel$Companion_getInstance
  });
  package$themeSwatches.ThemeSwatchModel = ThemeSwatchModel;
  $$importsForInline$$['BHStudios General Scripts'] = _;
  package$themeSwatches.get_serialValue_ucmv8k$ = get_serialValue;
  package$themeSwatches.get_colorSheetName_ucmv8k$ = get_colorSheetName;
  package$themeSwatches.invoke_hom2mx$ = invoke_0;
  package$themeSwatches.invoke_1gi96$ = invoke_1;
  package$themeSwatches.invoke_vyzvof$ = invoke_2;
  package$themeSwatches.invoke_78ie5c$ = invoke_3;
  Object.defineProperty(ThemeSwatchViewWrapper, 'Companion', {
    get: ThemeSwatchViewWrapper$Companion_getInstance
  });
  package$themeSwatches.ThemeSwatchViewWrapper = ThemeSwatchViewWrapper;
  var package$general = package$scripts.general || (package$scripts.general = {});
  package$general.main_kand9s$ = main;
  var package$serialization = package$general.serialization || (package$general.serialization = {});
  Object.defineProperty(package$serialization, 'LocalStorage', {
    get: LocalStorage_getInstance
  });
  package$serialization.invoke_miw9k7$ = invoke_4;
  package$serialization.get_blueHusky_gzevrd$ = get_blueHusky;
  package$serialization.NamespacedLocalStorage = NamespacedLocalStorage;
  Object.defineProperty(StoragePair, 'Companion', {
    get: StoragePair$Companion_getInstance
  });
  package$serialization.StoragePair = StoragePair;
  package$serialization.invoke_kzvs0k$ = invoke_5;
  var package$utilities = package$general.utilities || (package$general.utilities = {});
  package$utilities.get_9wl75a$ = get_0;
  package$utilities.get_groups_tgewol$ = get_groups;
  package$utilities.get_isCapitalized_pdl1vz$ = get_isCapitalized;
  package$utilities.tryOrNull_klfg04$ = tryOrNull;
  var package$pageMutation = package$scripts.pageMutation || (package$scripts.pageMutation = {});
  Object.defineProperty(package$pageMutation, 'ContentReplacers', {
    get: ContentReplacers_getInstance
  });
  Object.defineProperty(ThemeBrightnessTier, 'black', {
    get: ThemeBrightnessTier$black_getInstance
  });
  Object.defineProperty(ThemeBrightnessTier, 'dark', {
    get: ThemeBrightnessTier$dark_getInstance
  });
  Object.defineProperty(ThemeBrightnessTier, 'light', {
    get: ThemeBrightnessTier$light_getInstance
  });
  Object.defineProperty(ThemeBrightnessTier, 'white', {
    get: ThemeBrightnessTier$white_getInstance
  });
  var package$theming = package$scripts.theming || (package$scripts.theming = {});
  package$theming.ThemeBrightnessTier = ThemeBrightnessTier;
  Object.defineProperty(ThemeBrightnessTier, 'Companion', {
    get: ThemeBrightnessTier$Companion_getInstance
  });
  package$theming.get_className_aarxa7$ = get_className_0;
  package$theming.get_serialKey_yxqlj5$ = get_serialKey;
  package$theming.get_serialValue_aarxa7$ = get_serialValue_0;
  package$theming.initFromPage_yxqlj5$ = initFromPage;
  package$theming.invoke_el3xgj$ = invoke_6;
  Object.defineProperty(ThemeColor, 'Companion', {
    get: ThemeColor$Companion_getInstance
  });
  package$theming.ThemeColor = ThemeColor;
  package$theming.get_serialValue_923l1l$ = get_serialValue_1;
  package$theming.get_default_dz5wqd$ = get_default;
  package$theming.initFromPage_dz5wqd$ = initFromPage_0;
  Object.defineProperty(package$theming, 'ThemeController', {
    get: ThemeController_getInstance
  });
  Object.defineProperty(ThemeModel, 'Companion', {
    get: ThemeModel$Companion_getInstance
  });
  package$theming.ThemeModel = ThemeModel;
  package$theming.invoke_jpqs0p$ = invoke_7;
  package$theming.invoke_d46xsf$ = invoke_8;
  package$theming.invoke_g3vhmi$ = invoke_9;
  package$theming.invoke_75pd5s$ = invoke_10;
  package$theming.fillingInMissingData_h0zypj$ = fillingInMissingData;
  existingModels = LinkedHashMap_init();
  main([]);
  Kotlin.defineModule('BHStudios General Scripts', _);
  return _;
}(typeof this['BHStudios General Scripts'] === 'undefined' ? {} : this['BHStudios General Scripts'], kotlin);

//# sourceMappingURL=BHStudios General Scripts.js.map
