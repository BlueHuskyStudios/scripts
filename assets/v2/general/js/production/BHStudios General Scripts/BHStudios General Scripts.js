if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'BHStudios General Scripts'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'BHStudios General Scripts'.");
}
this['BHStudios General Scripts'] = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var hasClass = Kotlin.kotlin.dom.hasClass_46n0ku$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function main(args) {
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
  function ButtonController(model, view) {
    this.suppressChangeReactions_0 = false;
    this.model_v5gd25$_0 = new Delegates$observable$ObjectLiteral(ButtonController$model$lambda(this, model), model);
    this.view_jr1yrn$_0 = new Delegates$observable$ObjectLiteral_0(ButtonController$view$lambda(this, model, view), view);
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
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  ButtonController.prototype.didPress_9ojx7i$ = function (event) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  function ButtonController$model$lambda(this$ButtonController, closure$model) {
    return function (f, f_0, newDelegate) {
      closure$model.delegate = this$ButtonController;
      return Unit;
    };
  }
  function ButtonController$view$lambda(this$ButtonController, closure$model, closure$view) {
    return function (f, f_0, newView) {
      this$ButtonController.suppressChangeReactions_0 = true;
      loadFromView(closure$model, closure$view);
      this$ButtonController.suppressChangeReactions_0 = false;
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
    this.delegate = null;
  }
  ButtonModel.prototype.handleClick_9ojx7i$ = function (event) {
    var tmp$;
    (tmp$ = this.delegate) != null ? (tmp$.didPress_9ojx7i$(event), Unit) : null;
  };
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
  var sidebarHiddenClass;
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
  function SidebarController(model, view) {
    this.suppressChangeReactions_0 = false;
    this.model_htwi0p$_0 = new Delegates$observable$ObjectLiteral_1(SidebarController$model$lambda(this, model), model);
    this.view_7bbqjl$_0 = new Delegates$observable$ObjectLiteral_2(SidebarController$view$lambda(this, model, view), view);
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
  SidebarController.prototype.didShowOrHide_dqye30$ = function (oldIsShown, newIsShown) {
    if (this.suppressChangeReactions_0) {
      return;
    }
    if (newIsShown) {
      removeClass_0(this.view, [sidebarHiddenClass]);
    }
     else {
      addClass_0(this.view, [sidebarHiddenClass]);
    }
  };
  function SidebarController$model$lambda(this$SidebarController, closure$model) {
    return function (f, f_0, newDelegate) {
      closure$model.delegate = this$SidebarController;
      return Unit;
    };
  }
  function SidebarController$view$lambda(this$SidebarController, closure$model, closure$view) {
    return function (f, f_0, newView) {
      this$SidebarController.suppressChangeReactions_0 = true;
      loadFromView_0(closure$model, closure$view);
      this$SidebarController.suppressChangeReactions_0 = false;
      return Unit;
    };
  }
  SidebarController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SidebarController',
    interfaces: [SidebarModelDelegate]
  };
  function loadFromView_0($receiver, view) {
    $receiver.isShown = hasClass_0(view, sidebarHiddenClass);
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
  function SidebarModel() {
    this.isShown_uoqu9g$_0 = new Delegates$observable$ObjectLiteral_3(SidebarModel$isShown$lambda(this), false);
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
  function SidebarModel$isShown$lambda(this$SidebarModel) {
    return function (property, oldValue, newValue) {
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
    this.htmlElement_quxvwl$_0 = htmlElement;
  }
  Object.defineProperty(SidebarViewWrapper.prototype, 'htmlElement', {
    get: function () {
      return this.htmlElement_quxvwl$_0;
    }
  });
  SidebarViewWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SidebarViewWrapper',
    interfaces: [WrappedHtmlView]
  };
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
  var package$button = package$components.button || (package$components.button = {});
  package$button.ButtonController = ButtonController;
  package$button.loadFromView_k5cyxg$ = loadFromView;
  package$button.ButtonModel = ButtonModel;
  package$button.ButtonModelDelegate = ButtonModelDelegate;
  package$button.ButtonViewWrapper = ButtonViewWrapper;
  var package$sidebar = package$components.sidebar || (package$components.sidebar = {});
  Object.defineProperty(package$sidebar, 'sidebarHiddenClass', {
    get: function () {
      return sidebarHiddenClass;
    }
  });
  package$sidebar.SidebarController = SidebarController;
  package$sidebar.loadFromView_w1ovkk$ = loadFromView_0;
  package$sidebar.SidebarModel = SidebarModel;
  package$sidebar.SidebarModelDelegate = SidebarModelDelegate;
  package$sidebar.SidebarViewWrapper = SidebarViewWrapper;
  sidebarHiddenClass = 'sidebar-hidden';
  main([]);
  Kotlin.defineModule('BHStudios General Scripts', _);
  return _;
}(typeof this['BHStudios General Scripts'] === 'undefined' ? {} : this['BHStudios General Scripts'], kotlin);
