if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'BHStudios General Scripts'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'BHStudios General Scripts'.");
}
this['BHStudios General Scripts'] = function (_, Kotlin) {
  'use strict';
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var hasClass = Kotlin.kotlin.dom.hasClass_46n0ku$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toString = Kotlin.toString;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_emfgvx$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  ThemeSwatchModel$color.prototype = Object.create(ThemeSwatchModel.prototype);
  ThemeSwatchModel$color.prototype.constructor = ThemeSwatchModel$color;
  ThemeSwatchModel$brightness.prototype = Object.create(ThemeSwatchModel.prototype);
  ThemeSwatchModel$brightness.prototype.constructor = ThemeSwatchModel$brightness;
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
  function Delegates$observable$ObjectLiteral(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
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
    get: function () {
      return this.model_2jw593$_0.getValue_lrcp0p$(this, ButtonController$model_metadata);
    },
    set: function (model) {
      this.model_2jw593$_0.setValue_9rddgb$(this, ButtonController$model_metadata, model);
    }
  });
  var ButtonController$view_metadata = new PropertyMetadata('view');
  Object.defineProperty(ButtonController.prototype, 'view', {
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
    }
    return ButtonModel$Companion_instance;
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
    }
     else {
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
    }
    return SidebarButtonController$Companion_instance;
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
  function Delegates$observable$ObjectLiteral_0(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
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
    get: function () {
      return this.model_n7tbub$_0.getValue_lrcp0p$(this, SidebarController$model_metadata);
    },
    set: function (model) {
      this.model_n7tbub$_0.setValue_9rddgb$(this, SidebarController$model_metadata, model);
    }
  });
  var SidebarController$view_metadata = new PropertyMetadata('view');
  Object.defineProperty(SidebarController.prototype, 'view', {
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
    }
     else {
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
    }
     else {
      return new SidebarController(SidebarModel$Companion_getInstance().invoke_2rdptt$(htmlElement), new SidebarViewWrapper(htmlElement));
    }
  };
  Object.defineProperty(SidebarController$Companion.prototype, 'anySidebar', {
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
    }
    return SidebarController$Companion_instance;
  }
  SidebarController.prototype.didShowOrHide_dqye30$ = function (oldIsShown, newIsShown) {
    if (this.suppressChangeReactions_0) {
      return;
    }
    var view = this.view;
    if (view == null) {
      if (newIsShown) {
        SidebarViewWrapper$Companion_getInstance().defaultContainerElement.addClass(SidebarViewWrapper$Companion_getInstance().sidebarShownClassName);
      }
       else {
        SidebarViewWrapper$Companion_getInstance().defaultContainerElement.removeClass(SidebarViewWrapper$Companion_getInstance().sidebarShownClassName);
      }
    }
     else {
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
  function Delegates$observable$ObjectLiteral_1(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
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
    }
    return SidebarModel$Companion_instance;
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
    }
  }
  Object.defineProperty(SidebarViewWrapper.prototype, 'htmlElement', {
    get: function () {
      return this.htmlElement_1oaz9d$_0;
    }
  });
  Object.defineProperty(SidebarViewWrapper.prototype, 'scrimHtmlElement', {
    get: function () {
      return this.scrimHtmlElementGetter_0();
    }
  });
  Object.defineProperty(SidebarViewWrapper.prototype, 'isShown', {
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
    }
    return SidebarViewWrapper$Companion_instance;
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
    var tmp$;
    tmp$ = this.model;
    if (Kotlin.isType(tmp$, ThemeSwatchModel$color))
      $(ThemeSwatchController$Companion_getInstance().themeSheetLinkElementSelector).attr('href', this.themeUrl_0);
    else if (Kotlin.isType(tmp$, ThemeSwatchModel$brightness))
      $(':root').removeClass(joinToString(get_allClassNames(ThemeBrightnessTier$Companion_getInstance()), ' ')).addClass(get_className_0(this.model.brightnessTier));
    else
      Kotlin.noWhenBranchMatched();
  };
  Object.defineProperty(ThemeSwatchController.prototype, 'themeUrl_0', {
    get: function () {
      var tmp$;
      tmp$ = get_colorSheetName(this.model);
      if (tmp$ == null) {
        return null;
      }
      return ThemeSwatchController$Companion_getInstance().stylesheetUrl_0(tmp$);
    }
  });
  function ThemeSwatchController$Companion() {
    ThemeSwatchController$Companion_instance = this;
    this.themeSheetLinkElementSelector = 'link#theme-stylesheet';
    this.frameworkSheetLinkElementSelector = 'link#framework-stylesheet';
    this.stylesheetsProtocol_0 = 'https';
    this.stylesheetsDomain_0 = 'stylesheets.bhstudios.org';
    this.stylesheetsDirectoryPath_0 = 'assets/v2/neon/';
    this.stylesheetNamePrefix_0 = 'neon-';
    this.stylesheetNameSuffix_0 = '.css';
    this.stylesheetBaseUrl_0 = 'https://stylesheets.bhstudios.org/assets/v2/neon/';
  }
  ThemeSwatchController$Companion.prototype.stylesheetFileName_0 = function (color) {
    return this.stylesheetNamePrefix_0 + color + this.stylesheetNameSuffix_0;
  };
  ThemeSwatchController$Companion.prototype.stylesheetUrl_0 = function (color) {
    return this.stylesheetBaseUrl_0 + '/' + this.stylesheetFileName_0(color);
  };
  ThemeSwatchController$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ThemeSwatchController$Companion_instance = null;
  function ThemeSwatchController$Companion_getInstance() {
    if (ThemeSwatchController$Companion_instance === null) {
      new ThemeSwatchController$Companion();
    }
    return ThemeSwatchController$Companion_instance;
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
    tmp$ = invoke_0(ThemeSwatchModel$Companion_getInstance(), view);
    if (tmp$ == null) {
      return null;
    }
    var model = tmp$;
    return new ThemeSwatchController(model, view);
  }
  function ThemeSwatchModel() {
    ThemeSwatchModel$Companion_getInstance();
  }
  function ThemeSwatchModel$color(sheetName) {
    ThemeSwatchModel.call(this);
    this.sheetName = sheetName;
  }
  ThemeSwatchModel$color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'color',
    interfaces: [ThemeSwatchModel]
  };
  function ThemeSwatchModel$brightness(brightnessTier) {
    ThemeSwatchModel.call(this);
    this.brightnessTier = brightnessTier;
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
    }
    return ThemeSwatchModel$Companion_instance;
  }
  ThemeSwatchModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThemeSwatchModel',
    interfaces: []
  };
  function get_serialValue($receiver) {
    if (Kotlin.isType($receiver, ThemeSwatchModel$color))
      return 'color.' + $receiver.sheetName;
    else if (Kotlin.isType($receiver, ThemeSwatchModel$brightness))
      return 'brightness.' + $receiver.brightnessTier;
    else
      return Kotlin.noWhenBranchMatched();
  }
  function generateModel($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = $receiver.htmlElement.getAttribute(ThemeSwatchViewWrapper$Companion_getInstance().themeSwatchTypeAttributeName);
    if (tmp$ == null) {
      return null;
    }
    var swatchType = tmp$;
    tmp$_0 = $receiver.htmlElement.getAttribute(ThemeSwatchViewWrapper$Companion_getInstance().themeSwatchValueAttributeName);
    if (tmp$_0 == null) {
      return null;
    }
    var swatchValue = tmp$_0;
    switch (swatchType) {
      case 'color':
        tmp$_1 = new ThemeSwatchModel$color(swatchValue);
        break;
      case 'brightness':
        tmp$_1 = new ThemeSwatchModel$brightness(ThemeBrightnessTier$valueOf(swatchValue));
        break;
      default:tmp$_1 = null;
        break;
    }
    return tmp$_1;
  }
  function get_colorSheetName($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, ThemeSwatchModel$color) ? tmp$ : null) != null ? tmp$_0.sheetName : null;
  }
  var existingModels;
  function invoke_0($receiver, viewWrapper) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = ThemeSwatchModel$Companion_getInstance();
    var $receiver_0 = viewWrapper.htmlElement.id;
    tmp$ = $receiver_0.length === 0 ? null : $receiver_0;
    tmp$_0 = generateModel(viewWrapper);
    if (tmp$_0 == null) {
      return null;
    }
    return invoke_2(tmp$_1, tmp$, tmp$_0);
  }
  function invoke_1($receiver, htmlElement) {
    return invoke_0(ThemeSwatchModel$Companion_getInstance(), new ThemeSwatchViewWrapper(htmlElement));
  }
  function invoke$lambda(closure$model) {
    return function () {
      return closure$model;
    };
  }
  function invoke_2($receiver, id, model) {
    if (id === void 0)
      id = null;
    return get_0(existingModels, id != null ? id : get_serialValue(model), invoke$lambda(model));
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
    }
    return ThemeSwatchViewWrapper$Companion_instance;
  }
  ThemeSwatchViewWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThemeSwatchViewWrapper',
    interfaces: [WrappedHtmlView]
  };
  function main$lambda() {
    Setup_getInstance().performCommonPageConnections();
    return Unit;
  }
  function main(args) {
    $(main$lambda);
  }
  function Setup() {
    Setup_instance = this;
    this.sidebarButtonControllers_0 = ArrayList_init();
    this.themeSwatchControllers_0 = ArrayList_init();
  }
  Setup.prototype.performCommonPageConnections = function () {
    this.connectAllSidebarsToSidebarButtons_0();
    this.connectAllThemeSwatches_0();
  };
  function Setup$connectAllSidebarsToSidebarButtons$lambda(f, sidebarButtonElement) {
    var tmp$;
    var specifiedSidebarId = (tmp$ = sidebarButtonElement.getAttributeNode('for')) != null ? tmp$.value : null;
    if (specifiedSidebarId != null) {
      var sidebarElement = $('#' + toString(specifiedSidebarId)).get(0);
      if (sidebarElement != null) {
        return new SidebarButtonController(ButtonController_init(sidebarButtonElement), SidebarController$Companion_getInstance().invoke_ejp6n4$(sidebarElement));
      }
    }
    return new SidebarButtonController(ButtonController_init(sidebarButtonElement), SidebarController$Companion_getInstance().invoke_ejp6n4$($('.sidebar').get(0)));
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
  Setup.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Setup',
    interfaces: []
  };
  var Setup_instance = null;
  function Setup_getInstance() {
    if (Setup_instance === null) {
      new Setup();
    }
    return Setup_instance;
  }
  function get_0($receiver, key, backupValue) {
    var tmp$;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var answer = backupValue();
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
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
    }
    return ThemeBrightnessTier$Companion_instance;
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
  function get_allClassNames($receiver) {
    var $receiver_0 = ThemeBrightnessTier$values();
    var destination = ArrayList_init_0($receiver_0.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var item = $receiver_0[tmp$];
      destination.add_11rb$(get_className_0(item));
    }
    return destination;
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
  ThemeSwatchModel.color = ThemeSwatchModel$color;
  ThemeSwatchModel.brightness = ThemeSwatchModel$brightness;
  Object.defineProperty(ThemeSwatchModel, 'Companion', {
    get: ThemeSwatchModel$Companion_getInstance
  });
  package$themeSwatches.ThemeSwatchModel = ThemeSwatchModel;
  package$themeSwatches.get_serialValue_ucmv8k$ = get_serialValue;
  package$themeSwatches.get_colorSheetName_ucmv8k$ = get_colorSheetName;
  package$themeSwatches.invoke_1gi96$ = invoke_0;
  package$themeSwatches.invoke_vyzvof$ = invoke_1;
  package$themeSwatches.invoke_78ie5c$ = invoke_2;
  Object.defineProperty(ThemeSwatchViewWrapper, 'Companion', {
    get: ThemeSwatchViewWrapper$Companion_getInstance
  });
  package$themeSwatches.ThemeSwatchViewWrapper = ThemeSwatchViewWrapper;
  var package$general = package$scripts.general || (package$scripts.general = {});
  package$general.main_kand9s$ = main;
  var package$utilities = package$general.utilities || (package$general.utilities = {});
  package$utilities.get_9wl75a$ = get_0;
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
  Object.defineProperty(ThemeBrightnessTier, 'Companion', {
    get: ThemeBrightnessTier$Companion_getInstance
  });
  var package$theming = package$scripts.theming || (package$scripts.theming = {});
  package$theming.ThemeBrightnessTier = ThemeBrightnessTier;
  package$theming.get_className_aarxa7$ = get_className_0;
  package$theming.get_allClassNames_yxqlj5$ = get_allClassNames;
  existingModels = LinkedHashMap_init();
  main([]);
  Kotlin.defineModule('BHStudios General Scripts', _);
  return _;
}(typeof this['BHStudios General Scripts'] === 'undefined' ? {} : this['BHStudios General Scripts'], kotlin);
