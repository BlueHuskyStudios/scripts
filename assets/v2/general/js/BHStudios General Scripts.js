if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'BHStudios General Scripts'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'BHStudios General Scripts'.");
}
this['BHStudios General Scripts'] = function (_, Kotlin) {
  'use strict';
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Unit = Kotlin.kotlin.Unit;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var toString = Kotlin.toString;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var hasClass = Kotlin.kotlin.dom.hasClass_46n0ku$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_parentElement = defineInlineFunction('BHStudios General Scripts.jQueryInterface.get_parentElement_s15u7w$', function ($receiver) {
    return $receiver.parentElement;
  });
  function main$lambda() {
    Setup_getInstance().performCommonPageConnections();
    return Unit;
  }
  function main(args) {
    $(main$lambda);
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function Setup() {
    Setup_instance = this;
    this.sidebarButtonControllers_0 = ArrayList_init();
  }
  Setup.prototype.performCommonPageConnections = function () {
    this.connectAllSidebarsToSidebarButtons_0();
  };
  function Setup$connectAllSidebarsToSidebarButtons$lambda() {
    return $('.sidebar').get(0);
  }
  function Setup$connectAllSidebarsToSidebarButtons$lambda_0(closure$firstSidebarElement) {
    return function (f, sidebarButtonElement) {
      var tmp$;
      var specifiedSidebarId = (tmp$ = sidebarButtonElement.getAttributeNode('for')) != null ? tmp$.value : null;
      if (specifiedSidebarId != null) {
        var sidebarElement = $('#' + toString(specifiedSidebarId)).get(0);
        if (sidebarElement != null) {
          return new SidebarButtonController(ButtonController$Companion_getInstance().invoke_2rdptt$(sidebarButtonElement), SidebarController$Companion_getInstance().invoke_ejp6n4$(sidebarElement));
        }
      }
      return new SidebarButtonController(ButtonController$Companion_getInstance().invoke_2rdptt$(sidebarButtonElement), SidebarController$Companion_getInstance().invoke_ejp6n4$(closure$firstSidebarElement.value));
    };
  }
  Setup.prototype.connectAllSidebarsToSidebarButtons_0 = function () {
    var firstSidebarElement = lazy(Setup$connectAllSidebarsToSidebarButtons$lambda);
    var controllers = $('.show-sidebar-button').map(Setup$connectAllSidebarsToSidebarButtons$lambda_0(firstSidebarElement));
    addAll(this.sidebarButtonControllers_0, controllers);
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
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
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
  function ButtonController(initalModel, initialView) {
    ButtonController$Companion_getInstance();
    this.suppressChangeReactions_0 = false;
    this.pressListeners_0 = LinkedHashSet_init();
    this.model_v5gd25$_0 = new Delegates$observable$ObjectLiteral(ButtonController$model$lambda(this), initalModel);
    this.view_jr1yrn$_0 = new Delegates$observable$ObjectLiteral_0(ButtonController$view$lambda(this), initialView);
    this.didSetModel_0(initalModel);
    this.didSetView_0(initialView);
  }
  var ButtonController$model_metadata = new PropertyMetadata('model');
  Object.defineProperty(ButtonController.prototype, 'model', {
    get: function () {
      return this.model_v5gd25$_0.getValue_lrcp0p$(this, ButtonController$model_metadata);
    },
    set: function (model) {
      this.model_v5gd25$_0.setValue_9rddgb$(this, ButtonController$model_metadata, model);
    }
  });
  var ButtonController$view_metadata = new PropertyMetadata('view');
  Object.defineProperty(ButtonController.prototype, 'view', {
    get: function () {
      return this.view_jr1yrn$_0.getValue_lrcp0p$(this, ButtonController$view_metadata);
    },
    set: function (view) {
      this.view_jr1yrn$_0.setValue_9rddgb$(this, ButtonController$view_metadata, view);
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
  function ButtonController$Companion() {
    ButtonController$Companion_instance = this;
  }
  ButtonController$Companion.prototype.invoke_2rdptt$ = function (htmlElement) {
    return new ButtonController(ButtonModel$Companion_getInstance().invoke_2rdptt$(htmlElement), new ButtonViewWrapper(htmlElement));
  };
  ButtonController$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ButtonController$Companion_instance = null;
  function ButtonController$Companion_getInstance() {
    if (ButtonController$Companion_instance === null) {
      new ButtonController$Companion();
    }
    return ButtonController$Companion_instance;
  }
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
    this.htmlElement_zbxoh5$_0 = htmlElement;
  }
  Object.defineProperty(ButtonViewWrapper.prototype, 'htmlElement', {
    get: function () {
      return this.htmlElement_zbxoh5$_0;
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
  SidebarButtonController$Companion.prototype.invoke_oqewb4$ = function (buttonModel, sidebarController) {
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
  Delegates$observable$ObjectLiteral_2.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_2.prototype.constructor = Delegates$observable$ObjectLiteral_2;
  function Delegates$observable$ObjectLiteral_2(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_2.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function SidebarController(initialModel, initialView) {
    SidebarController$Companion_getInstance();
    this.suppressChangeReactions_0 = false;
    this.model_htwi0p$_0 = new Delegates$observable$ObjectLiteral_1(SidebarController$model$lambda(this), initialModel);
    this.view_7bbqjl$_0 = new Delegates$observable$ObjectLiteral_2(SidebarController$view$lambda(this), initialView);
    this.didSetModel_0(initialModel);
    this.didSetView_0(initialView);
  }
  var SidebarController$model_metadata = new PropertyMetadata('model');
  Object.defineProperty(SidebarController.prototype, 'model', {
    get: function () {
      return this.model_htwi0p$_0.getValue_lrcp0p$(this, SidebarController$model_metadata);
    },
    set: function (model) {
      this.model_htwi0p$_0.setValue_9rddgb$(this, SidebarController$model_metadata, model);
    }
  });
  var SidebarController$view_metadata = new PropertyMetadata('view');
  Object.defineProperty(SidebarController.prototype, 'view', {
    get: function () {
      return this.view_7bbqjl$_0.getValue_lrcp0p$(this, SidebarController$view_metadata);
    },
    set: function (view) {
      this.view_7bbqjl$_0.setValue_9rddgb$(this, SidebarController$view_metadata, view);
    }
  });
  SidebarController.prototype.didSetModel_0 = function (newModel) {
    newModel.delegate = this;
  };
  SidebarController.prototype.didSetView_0 = function (newView) {
    this.suppressChangeReactions_0 = true;
    if (newView == null) {
      this.didShowOrHide_dqye30$(this.model.isShown, this.model.isShown);
    }
     else {
      loadFromView_0(this.model, newView);
    }
    this.suppressChangeReactions_0 = false;
  };
  SidebarController.prototype.didShowOrHide_dqye30$ = function (oldIsShown, newIsShown) {
    if (this.suppressChangeReactions_0) {
      return;
    }
    var view = this.view;
    if (view == null) {
      if (newIsShown) {
        SidebarViewWrapper$Companion_getInstance().defaultElementResponsibleForHidingAndShowingTheSidebar.addClass(SidebarModel$Companion_getInstance().sidebarShownClassName);
      }
       else {
        SidebarViewWrapper$Companion_getInstance().defaultElementResponsibleForHidingAndShowingTheSidebar.removeClass(SidebarModel$Companion_getInstance().sidebarShownClassName);
      }
    }
     else {
      view.isShown = newIsShown;
    }
  };
  SidebarController.prototype.toggleHidden = function () {
    this.model.isShown = !this.model.isShown;
  };
  function SidebarController$Companion() {
    SidebarController$Companion_instance = this;
    this.allSidebars_qajbuu$_0 = lazy(SidebarController$Companion$allSidebars$lambda);
  }
  SidebarController$Companion.prototype.invoke_ejp6n4$ = function (htmlElement) {
    return htmlElement == null ? SidebarController$Companion_getInstance().allSidebars : new SidebarController(SidebarModel$Companion_getInstance().invoke_2rdptt$(htmlElement), new SidebarViewWrapper(htmlElement));
  };
  Object.defineProperty(SidebarController$Companion.prototype, 'allSidebars', {
    get: function () {
      return this.allSidebars_qajbuu$_0.value;
    }
  });
  function SidebarController$Companion$allSidebars$lambda() {
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
  Delegates$observable$ObjectLiteral_3.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral_3.prototype.constructor = Delegates$observable$ObjectLiteral_3;
  function Delegates$observable$ObjectLiteral_3(closure$onChange, initialValue_0) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue_0);
  }
  Delegates$observable$ObjectLiteral_3.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  function SidebarModel(initIsShown) {
    SidebarModel$Companion_getInstance();
    if (initIsShown === void 0)
      initIsShown = false;
    this.isShown_uoqu9g$_0 = new Delegates$observable$ObjectLiteral_3(SidebarModel$isShown$lambda(this), initIsShown);
    this.delegate = null;
  }
  var SidebarModel$isShown_metadata = new PropertyMetadata('isShown');
  Object.defineProperty(SidebarModel.prototype, 'isShown', {
    get: function () {
      return this.isShown_uoqu9g$_0.getValue_lrcp0p$(this, SidebarModel$isShown_metadata);
    },
    set: function (isShown) {
      this.isShown_uoqu9g$_0.setValue_9rddgb$(this, SidebarModel$isShown_metadata, isShown);
    }
  });
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function SidebarModel$Companion() {
    SidebarModel$Companion_instance = this;
    this.className = 'sidebar';
    this.sidebarShownClassName = 'sidebar-shown';
    this.existingModels_0 = LinkedHashMap_init();
  }
  SidebarModel$Companion.prototype.invoke_2rdptt$ = function (htmlElement) {
    return this.invoke_ivxn3r$(htmlElement.id, SidebarViewWrapper$Companion_getInstance().defaultElementResponsibleForHidingAndShowingTheSidebar.hasClass(this.sidebarShownClassName));
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
  function SidebarViewWrapper(htmlElement) {
    SidebarViewWrapper$Companion_getInstance();
    this.htmlElement_quxvwl$_0 = htmlElement;
  }
  Object.defineProperty(SidebarViewWrapper.prototype, 'htmlElement', {
    get: function () {
      return this.htmlElement_quxvwl$_0;
    }
  });
  Object.defineProperty(SidebarViewWrapper.prototype, 'isShown', {
    get: function () {
      return this.elementResponsibleForHidingAndShowingTheSidebar.hasClass(SidebarModel$Companion_getInstance().sidebarShownClassName);
    },
    set: function (newValue) {
      if (newValue)
        this.elementResponsibleForHidingAndShowingTheSidebar.addClass(SidebarModel$Companion_getInstance().sidebarShownClassName);
      else
        this.elementResponsibleForHidingAndShowingTheSidebar.removeClass(SidebarModel$Companion_getInstance().sidebarShownClassName);
    }
  });
  Object.defineProperty(SidebarViewWrapper.prototype, 'elementResponsibleForHidingAndShowingTheSidebar', {
    get: function () {
      return SidebarViewWrapper$Companion_getInstance().defaultElementResponsibleForHidingAndShowingTheSidebar;
    }
  });
  function SidebarViewWrapper$Companion() {
    SidebarViewWrapper$Companion_instance = this;
    this.defaultElementResponsibleForHidingAndShowingTheSidebar = $(':root');
  }
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
  var package$jQueryInterface = _.jQueryInterface || (_.jQueryInterface = {});
  package$jQueryInterface.get_parentElement_s15u7w$ = get_parentElement;
  var package$org = _.org || (_.org = {});
  var package$bh = package$org.bh || (package$org.bh = {});
  var package$scripts = package$bh.scripts || (package$bh.scripts = {});
  var package$general = package$scripts.general || (package$scripts.general = {});
  package$general.main_kand9s$ = main;
  var package$components = package$general.components || (package$general.components = {});
  package$components.WrappedHtmlView = WrappedHtmlView;
  package$components.get_className_3su5ae$ = get_className;
  package$components.addClass_pd9xjz$ = addClass_0;
  package$components.removeClass_pd9xjz$ = removeClass_0;
  package$components.hasClass_bo7xh4$ = hasClass_0;
  Object.defineProperty(ButtonController, 'Companion', {
    get: ButtonController$Companion_getInstance
  });
  var package$button = package$components.button || (package$components.button = {});
  package$button.ButtonController = ButtonController;
  package$button.loadFromView_k5cyxg$ = loadFromView;
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
  package$sidebar.loadFromView_w1ovkk$ = loadFromView_0;
  Object.defineProperty(SidebarModel, 'Companion', {
    get: SidebarModel$Companion_getInstance
  });
  package$sidebar.SidebarModel = SidebarModel;
  package$sidebar.SidebarModelDelegate = SidebarModelDelegate;
  Object.defineProperty(SidebarViewWrapper, 'Companion', {
    get: SidebarViewWrapper$Companion_getInstance
  });
  package$sidebar.SidebarViewWrapper = SidebarViewWrapper;
  var package$utilities = package$general.utilities || (package$general.utilities = {});
  package$utilities.get_9wl75a$ = get_0;
  main([]);
  Kotlin.defineModule('BHStudios General Scripts', _);
  return _;
}(typeof this['BHStudios General Scripts'] === 'undefined' ? {} : this['BHStudios General Scripts'], kotlin);
