"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_account_js"],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Account)
/* harmony export */ });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Account = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Account, _PageManager);
  function Account(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__.createTranslationDictionary)(context);
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }
  var _proto = Account.prototype;
  _proto.onReady = function onReady() {
    var $editAccountForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-edit-account-form]');
    var $addressForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-address-form]');
    var $inboxForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-inbox-form]');
    var $accountReturnForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('[data-account-return-form]');
    var $paymentMethodForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-payment-method-form]');
    var $reorderForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');
    var $bigCommerce = window.BigCommerce;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context);

    // Injected via template
    this.passwordRequirements = this.context.passwordRequirements;

    // Instantiates wish list JS
    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);
    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);
      if (this.$state.is('input')) {
        (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.insertStateHiddenField)(this.$state);
      }
    }
    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }
    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);
      if (this.$state.is('input')) {
        (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.insertStateHiddenField)(this.$state);
      }
    }
    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }
    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }
    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }
    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }
    if ($bigCommerce && $bigCommerce.renderAccountPayments) {
      var _this$context = this.context,
        countries = _this$context.countries,
        paymentsUrl = _this$context.paymentsUrl,
        storeHash = _this$context.storeHash,
        storeLocale = _this$context.storeLocale,
        vaultToken = _this$context.vaultToken,
        shopperId = _this$context.shopperId,
        customerEmail = _this$context.customerEmail,
        providerId = _this$context.providerId,
        currencyCode = _this$context.currencyCode,
        paymentMethodsUrl = _this$context.paymentMethodsUrl,
        paymentProviderInitializationData = _this$context.paymentProviderInitializationData,
        themeSettings = _this$context.themeSettings;
      $bigCommerce.renderAccountPayments({
        styles: {
          inputBase: {
            color: themeSettings['input-font-color'],
            borderColor: themeSettings['input-border-color']
          },
          inputValidationError: {
            color: themeSettings['color-error'],
            borderColor: themeSettings['color-error']
          },
          inputValidationSuccess: {
            color: themeSettings['color-success'],
            borderColor: themeSettings['color-success']
          },
          submitButton: {
            color: themeSettings['button--primary-color'],
            backgroundColor: themeSettings['button--primary-backgroundColor'],
            borderColor: themeSettings['button--primary-backgroundColor'],
            '&:hover': {
              color: themeSettings['button--primary-colorHover'],
              backgroundColor: themeSettings['button--primary-backgroundColorHover'],
              borderColor: themeSettings['button--primary-backgroundColorHover']
            },
            '&:active': {
              color: themeSettings['button--primary-colorActive'],
              backgroundColor: themeSettings['button--primary-backgroundColorActive'],
              borderColor: themeSettings['button--primary-backgroundColorActive']
            },
            '&[disabled]': {
              backgroundColor: themeSettings['button--disabled-backgroundColor'],
              borderColor: themeSettings['button--disabled-borderColor'],
              color: themeSettings['button--disabled-color'],
              cursor: 'not-allowed'
            }
          },
          cancelButton: {
            color: themeSettings['button--default-color'],
            backgroundColor: 'transparent',
            borderColor: themeSettings['button--default-borderColor'],
            '&:hover': {
              color: themeSettings['button--default-colorHover'],
              backgroundColor: 'transparent',
              borderColor: themeSettings['button--default-borderColorHover']
            },
            '&:active': {
              color: themeSettings['button--default-colorActive'],
              backgroundColor: 'transparent',
              borderColor: themeSettings['button--default-borderColorActive']
            }
          },
          label: {
            color: themeSettings['form-label-font-color']
          },
          validationError: {
            color: themeSettings['color-error']
          },
          heading: {
            color: themeSettings['color-textHeading']
          }
        },
        storeContextData: {
          countries: countries,
          paymentsUrl: paymentsUrl,
          storeHash: storeHash,
          storeLocale: storeLocale,
          vaultToken: vaultToken,
          shopperId: shopperId,
          customerEmail: customerEmail,
          providerId: providerId,
          currencyCode: currencyCode,
          paymentMethodsUrl: paymentMethodsUrl,
          paymentProviderInitializationData: paymentProviderInitializationData
        },
        errorHandler: _global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal
      });
    }
    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }

  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */;
  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;
    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });
      if (!submitForm) {
        event.preventDefault();
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(_this2.context.selectItem);
      }
    });
  };
  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var _this3 = this;
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm, this.context);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.announceInputErrorMessage
    });
    addressValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      (0,_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }
        if ($last) {
          addressValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setStateCountryValidation(addressValidator, field, _this3.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.cleanUpStateValidation(field);
        }
      });
    }
    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();
      if (addressValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false;

      // Iterate until we find a non-zero value in the dropdown for quantity
      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true;

          // Exit out of loop if we found at least one return
          return true;
        }
      });
      if (formSubmit) {
        return true;
      }
      (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(errorMessage);
      return event.preventDefault();
    });
  };
  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this4 = this;
    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, \"prefix\": \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm, this.context);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.announceInputErrorMessage
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last;
    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }
      var $field = $(field);
      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }
      if ($last) {
        paymentMethodValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setStateCountryValidation(paymentMethodValidator, field, _this4.validationDictionary.field_not_blank);
      } else {
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.cleanUpStateValidation(field);
      }
    });

    // Use credit card number input listener to highlight credit card type
    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = (0,_common_payment_method__WEBPACK_IMPORTED_MODULE_9__.creditCardType)(target.value);
      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    });

    // Set of credit card validation
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    });

    // Set of credit card format
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Formatters.setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Formatters.setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]");

    // Billing address validation
    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault();
      // Perform final form validation
      paymentMethodValidator.performCheck();
      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {});

        // Assign country and state code
        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this4.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });
        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });
        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state;

        // Default Instrument
        data.default_instrument = !!data.default_instrument;

        // Store credit card
        (0,_common_payment_method__WEBPACK_IMPORTED_MODULE_9__.storeInstrument)(_this4.context, data, function () {
          window.location.href = _this4.context.paymentMethodsUrl;
        }, function () {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(_this4.context.generic_error);
        });
      }
    });
  };
  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm, this.context);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: '${formEditSelector} input[type="submit"]',
      delay: 900
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector);

    // This only handles the custom fields, standard fields are added below
    editValidator.add(validationModel);
    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setEmailValidation(editValidator, emailSelector, this.validationDictionary.valid_email);
    }
    if ($passwordElement && $password2Element) {
      var _this$validationDicti = this.validationDictionary,
        enterPassword = _this$validationDicti.password,
        matchPassword = _this$validationDicti.password_match;
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.createPasswordValidationErrorTextObject)(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error), true);
    }
    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;
          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }
          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }
    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();
      if (editValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
      setTimeout(function () {
        var earliestError = $('span.form-inlineMessage:first').prev('input');
        earliestError.focus();
      }, 900);
    });
  };
  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]',
      delay: 900
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();
      if (inboxValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
      setTimeout(function () {
        var earliestError = $('span.form-inlineMessage:first').prev('input');
        earliestError.focus();
      }, 900);
    });
  };
  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Formatters": () => (/* binding */ Formatters),
/* harmony export */   "Validators": () => (/* binding */ Validators),
/* harmony export */   "creditCardType": () => (/* binding */ creditCardType),
/* harmony export */   "storeInstrument": () => (/* binding */ storeInstrument)
/* harmony export */ });
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */
var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};

/**
 * Get credit card type from credit card number
 * @param {string} value
 */
var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.type(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(value), true);
};

/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */
var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
    shopperId = _ref.shopperId,
    storeHash = _ref.storeHash,
    vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
    currency_code = _ref2.currency_code,
    credit_card_number = _ref2.credit_card_number,
    expiration = _ref2.expiration,
    name_on_card = _ref2.name_on_card,
    cvv = _ref2.cvv,
    default_instrument = _ref2.default_instrument,
    address1 = _ref2.address1,
    address2 = _ref2.address2,
    city = _ref2.city,
    postal_code = _ref2.postal_code,
    state_or_province_code = _ref2.state_or_province_code,
    country_code = _ref2.country_code,
    company = _ref2.company,
    first_name = _ref2.first_name,
    last_name = _ref2.last_name,
    email = _ref2.email,
    phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.format(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(target.value));
      });
    }
  },
  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
          which = _ref4.which;
        var refTarget = target;
        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default().cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urls) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urls.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var noCompareMessage = _ref.noCompareMessage,
    urls = _ref.urls;
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urls);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urls);
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showAlertModal)(noCompareMessage);
      return false;
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9hY2NvdW50X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRVY7QUFDRztBQUNnQjtBQUNBO0FBT2Y7QUFDNkM7QUFDa0Q7QUFDbEY7QUFDUTtBQUFBLElBRW5Da0IsT0FBTywwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLE9BQUEsRUFBQUMsWUFBQTtFQUN4QixTQUFBRCxRQUFZRyxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFILFlBQUEsQ0FBQUksSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxvQkFBb0IsR0FBR2QsNkZBQTJCLENBQUNXLE9BQU8sQ0FBQztJQUNoRUMsS0FBQSxDQUFLRyxNQUFNLEdBQUdDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUM1Q0osS0FBQSxDQUFLSyxLQUFLLEdBQUdELENBQUMsQ0FBQyxNQUFNLENBQUM7SUFBQyxPQUFBSixLQUFBO0VBQzNCO0VBQUMsSUFBQU0sTUFBQSxHQUFBVixPQUFBLENBQUFXLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxPQUFPLEdBQVAsU0FBQUEsUUFBQSxFQUFVO0lBQ04sSUFBTUMsZ0JBQWdCLEdBQUcxQixzRUFBWSxDQUFDLDhCQUE4QixDQUFDO0lBQ3JFLElBQU0yQixZQUFZLEdBQUczQixzRUFBWSxDQUFDLHlCQUF5QixDQUFDO0lBQzVELElBQU00QixVQUFVLEdBQUc1QixzRUFBWSxDQUFDLHVCQUF1QixDQUFDO0lBQ3hELElBQU02QixrQkFBa0IsR0FBRzdCLHNFQUFZLENBQUMsNEJBQTRCLENBQUM7SUFDckUsSUFBTThCLGtCQUFrQixHQUFHOUIsc0VBQVksQ0FBQyxnQ0FBZ0MsQ0FBQztJQUN6RSxJQUFNK0IsWUFBWSxHQUFHL0Isc0VBQVksQ0FBQyw2QkFBNkIsQ0FBQztJQUNoRSxJQUFNZ0MsY0FBYyxHQUFHWCxD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Y29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcGF5bWVudC1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi93aXNobGlzdCc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24nO1xuaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCB7XG4gICAgY2xhc3NpZnlGb3JtLFxuICAgIFZhbGlkYXRvcnMsXG4gICAgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkLFxuICAgIGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCxcbn0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IHsgY3JlZGl0Q2FyZFR5cGUsIHN0b3JlSW5zdHJ1bWVudCwgVmFsaWRhdG9ycyBhcyBDQ1ZhbGlkYXRvcnMsIEZvcm1hdHRlcnMgYXMgQ0NGb3JtYXR0ZXJzIH0gZnJvbSAnLi9jb21tb24vcGF5bWVudC1tZXRob2QnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgICAgIHRoaXMuJHN0YXRlID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgJGVkaXRBY2NvdW50Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkYWRkcmVzc0Zvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRpbmJveEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkYWNjb3VudFJldHVybkZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmV0dXJuLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRwYXltZW50TWV0aG9kRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRyZW9yZGVyRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnW2RhdGEtYWNjb3VudC1yZW9yZGVyLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRpbnZvaWNlQnV0dG9uID0gJCgnW2RhdGEtcHJpbnQtaW52b2ljZV0nKTtcbiAgICAgICAgY29uc3QgJGJpZ0NvbW1lcmNlID0gd2luZG93LkJpZ0NvbW1lcmNlO1xuXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIC8vIEluamVjdGVkIHZpYSB0ZW1wbGF0ZVxuICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzID0gdGhpcy5jb250ZXh0LnBhc3N3b3JkUmVxdWlyZW1lbnRzO1xuXG4gICAgICAgIC8vIEluc3RhbnRpYXRlcyB3aXNoIGxpc3QgSlNcbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmICgkZWRpdEFjY291bnRGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbnZvaWNlQnV0dG9uLmxlbmd0aCkge1xuICAgICAgICAgICAgJGludm9pY2VCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGggLyAyIC0gNDUwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgLyAyIC0gMzIwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9ICRpbnZvaWNlQnV0dG9uLmRhdGEoJ3ByaW50SW52b2ljZScpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnb3JkZXJJbnZvaWNlJywgYHdpZHRoPTkwMCxoZWlnaHQ9NjUwLGxlZnQ9JHtsZWZ0fSx0b3A9JHt0b3B9LHNjcm9sbGJhcnM9MWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFkZHJlc3NGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbmJveEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhY2NvdW50UmV0dXJuRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwYXltZW50TWV0aG9kRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRyZW9yZGVyRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGJpZ0NvbW1lcmNlICYmICRiaWdDb21tZXJjZS5yZW5kZXJBY2NvdW50UGF5bWVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBjb3VudHJpZXMsXG4gICAgICAgICAgICAgICAgcGF5bWVudHNVcmwsXG4gICAgICAgICAgICAgICAgc3RvcmVIYXNoLFxuICAgICAgICAgICAgICAgIHN0b3JlTG9jYWxlLFxuICAgICAgICAgICAgICAgIHZhdWx0VG9rZW4sXG4gICAgICAgICAgICAgICAgc2hvcHBlcklkLFxuICAgICAgICAgICAgICAgIGN1c3RvbWVyRW1haWwsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJJZCxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGUsXG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZHNVcmwsXG4gICAgICAgICAgICAgICAgcGF5bWVudFByb3ZpZGVySW5pdGlhbGl6YXRpb25EYXRhLFxuICAgICAgICAgICAgICAgIHRoZW1lU2V0dGluZ3MsXG4gICAgICAgICAgICB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgICAgICAkYmlnQ29tbWVyY2UucmVuZGVyQWNjb3VudFBheW1lbnRzKHtcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRCYXNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snaW5wdXQtZm9udC1jb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2lucHV0LWJvcmRlci1jb2xvciddLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbGlkYXRpb25FcnJvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2NvbG9yLWVycm9yJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snY29sb3ItZXJyb3InXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWxpZGF0aW9uU3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2NvbG9yLXN1Y2Nlc3MnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZVNldHRpbmdzWydjb2xvci1zdWNjZXNzJ10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1jb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktYmFja2dyb3VuZENvbG9yJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1jb2xvckhvdmVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktYmFja2dyb3VuZENvbG9ySG92ZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvckhvdmVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktY29sb3JBY3RpdmUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1iYWNrZ3JvdW5kQ29sb3JBY3RpdmUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvckFjdGl2ZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICcmW2Rpc2FibGVkXSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGlzYWJsZWQtYmFja2dyb3VuZENvbG9yJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGlzYWJsZWQtYm9yZGVyQ29sb3InXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kaXNhYmxlZC1jb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGVmYXVsdC1jb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGVmYXVsdC1ib3JkZXJDb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGVmYXVsdC1jb2xvckhvdmVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRlZmF1bHQtYm9yZGVyQ29sb3JIb3ZlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kZWZhdWx0LWNvbG9yQWN0aXZlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRlZmF1bHQtYm9yZGVyQ29sb3JBY3RpdmUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snZm9ybS1sYWJlbC1mb250LWNvbG9yJ10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2NvbG9yLWVycm9yJ10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydjb2xvci10ZXh0SGVhZGluZyddLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RvcmVDb250ZXh0RGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb3VudHJpZXMsXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRzVXJsLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZUhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlTG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICB2YXVsdFRva2VuLFxuICAgICAgICAgICAgICAgICAgICBzaG9wcGVySWQsXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyRW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVySWQsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZHNVcmwsXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRQcm92aWRlckluaXRpYWxpemF0aW9uRGF0YSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcjogc2hvd0FsZXJ0TW9kYWwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZERlbGV0ZUFkZHJlc3MoKTtcbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGEgc3VibWl0IGhvb2sgdG8gZW5zdXJlIHRoZSBjdXN0b21lciByZWNlaXZlcyBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgYmVmb3JlIGRlbGV0aW5nIGFuIGFkZHJlc3NcbiAgICAgKi9cbiAgICBiaW5kRGVsZXRlQWRkcmVzcygpIHtcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLWFkZHJlc3NdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZUFkZHJlc3MnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmREZWxldGVQYXltZW50TWV0aG9kKCkge1xuICAgICAgICAkKCdbZGF0YS1kZWxldGUtcGF5bWVudC1tZXRob2RdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZVBheW1lbnRNZXRob2QnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pIHtcbiAgICAgICAgJHJlb3JkZXJGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzID0gJCgnLmFjY291bnQtbGlzdEl0ZW0gLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSBmYWxzZTtcblxuICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmZpbmQoJ1tuYW1lXj1cInJlb3JkZXJpdGVtXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMuZWFjaCgoaW5kZXgsIHByb2R1Y3RDaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQocHJvZHVjdENoZWNrYm94KS52YWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYHJlb3JkZXJpdGVtWyR7cHJvZHVjdElkfV1gLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAkcmVvcmRlckZvcm0uYXBwZW5kKCRpbnB1dCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdWJtaXRGb3JtKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbCh0aGlzLmNvbnRleHQuc2VsZWN0SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGFkZHJlc3NGb3JtLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICBjb25zdCBzdGF0ZVNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dIFtkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXSc7XG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKHN0YXRlU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBhZGRyZXNzVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgIGlmICgkc3RhdGVFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgJGxhc3Q7XG5cbiAgICAgICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24oYWRkcmVzc1ZhbGlkYXRvciwgZmllbGQsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuZmllbGRfbm90X2JsYW5rKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJGFkZHJlc3NGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICRhY2NvdW50UmV0dXJuRm9ybS5kYXRhKCdhY2NvdW50UmV0dXJuRm9ybUVycm9yJyk7XG5cbiAgICAgICAgJGFjY291bnRSZXR1cm5Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybVN1Ym1pdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHVudGlsIHdlIGZpbmQgYSBub24temVybyB2YWx1ZSBpbiB0aGUgZHJvcGRvd24gZm9yIHF1YW50aXR5XG4gICAgICAgICAgICAkKCdbbmFtZV49XCJyZXR1cm5fcXR5XCJdJywgJGFjY291bnRSZXR1cm5Gb3JtKS5lYWNoKChpLCBlbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJChlbGUpLnZhbCgpLCAxMCkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVN1Ym1pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXhpdCBvdXQgb2YgbG9vcCBpZiB3ZSBmb3VuZCBhdCBsZWFzdCBvbmUgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZm9ybVN1Ym1pdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChlcnJvck1lc3NhZ2UpO1xuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pIHtcbiAgICAgICAgLy8gSW5qZWN0IHZhbGlkYXRpb25zIGludG8gZm9ybSBmaWVsZHMgYmVmb3JlIHZhbGlkYXRpb24gcnVuc1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2ZpcnN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmZpcnN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2xhc3RfbmFtZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQubGFzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb21wYW55LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb21wYW55TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bob25lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5waG9uZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczFMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMi5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczJMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY2l0eS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY2l0eUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NvdW50cnkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZXNlbGVjdFwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY291bnRyeUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwicHJlZml4XCI6IFwiJHt0aGlzLmNvbnRleHQuY2hvb3NlQ291bnRyeUxhYmVsfVwiIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNzdGF0ZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuc3RhdGVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwb3N0YWxfY29kZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucG9zdGFsQ29kZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kU2VsZWN0b3IgPSAnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJztcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWAsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXWApO1xuXG4gICAgICAgIGxldCAkbGFzdDtcbiAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgZmllbGQsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuZmllbGRfbm90X2JsYW5rKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXNlIGNyZWRpdCBjYXJkIG51bWJlciBpbnB1dCBsaXN0ZW5lciB0byBoaWdobGlnaHQgY3JlZGl0IGNhcmQgdHlwZVxuICAgICAgICBsZXQgY2FyZFR5cGU7XG4gICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgIGNhcmRUeXBlID0gY3JlZGl0Q2FyZFR5cGUodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChjYXJkVHlwZSkge1xuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdbYWx0PVwiJHtjYXJkVHlwZX1cIl1gKS5zaWJsaW5ncygpLmNzcygnb3BhY2l0eScsICcuMicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nYCkuY3NzKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIHZhbGlkYXRpb25cbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWAsIHRoaXMuY29udGV4dC5jcmVkaXRDYXJkTnVtYmVyKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEV4cGlyYXRpb25WYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cIl1gLCB0aGlzLmNvbnRleHQuZXhwaXJhdGlvbik7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXROYW1lT25DYXJkVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJuYW1lX29uX2NhcmRcIl1gLCB0aGlzLmNvbnRleHQubmFtZU9uQ2FyZCk7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRDdnZWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImN2dlwiXWAsIHRoaXMuY29udGV4dC5jdnYsICgpID0+IGNhcmRUeXBlKTtcblxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgZm9ybWF0XG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApO1xuICAgICAgICBDQ0Zvcm1hdHRlcnMuc2V0RXhwaXJhdGlvbkZvcm1hdChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJdYCk7XG5cbiAgICAgICAgLy8gQmlsbGluZyBhZGRyZXNzIHZhbGlkYXRpb25cbiAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBQZXJmb3JtIGZpbmFsIGZvcm0gdmFsaWRhdGlvblxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBmb3JtIGRhdGEgYW5kIHJlZHVjZSBpdCB0byBvYmplY3RcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gXy5yZWR1Y2UoJHBheW1lbnRNZXRob2RGb3JtLnNlcmlhbGl6ZUFycmF5KCksIChvYmosIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmT2JqID0gb2JqO1xuICAgICAgICAgICAgICAgICAgICByZWZPYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZPYmo7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGNvdW50cnkgYW5kIHN0YXRlIGNvZGVcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5ID0gXy5maW5kKHRoaXMuY29udGV4dC5jb3VudHJpZXMsICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhLmNvdW50cnkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY291bnRyeSAmJiBfLmZpbmQoY291bnRyeS5zdGF0ZXMsICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBkYXRhLmNvdW50cnlfY29kZSA9IGNvdW50cnkgPyBjb3VudHJ5LmNvZGUgOiBkYXRhLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgZGF0YS5zdGF0ZV9vcl9wcm92aW5jZV9jb2RlID0gc3RhdGUgPyBzdGF0ZS5jb2RlIDogZGF0YS5zdGF0ZTtcblxuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgSW5zdHJ1bWVudFxuICAgICAgICAgICAgICAgIGRhdGEuZGVmYXVsdF9pbnN0cnVtZW50ID0gISFkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudDtcblxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGNyZWRpdCBjYXJkXG4gICAgICAgICAgICAgICAgc3RvcmVJbnN0cnVtZW50KHRoaXMuY29udGV4dCwgZGF0YSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuY29udGV4dC5wYXltZW50TWV0aG9kc1VybDtcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHRoaXMuY29udGV4dC5nZW5lcmljX2Vycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0sIHRoaXMuY29udGV4dCk7XG4gICAgICAgIGNvbnN0IGZvcm1FZGl0U2VsZWN0b3IgPSAnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXSc7XG4gICAgICAgIGNvbnN0IGVkaXRWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIGRlbGF5OiA5MDAsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBlbWFpbFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkVtYWlsQWRkcmVzc1wiXWA7XG4gICAgICAgIGNvbnN0ICRlbWFpbEVsZW1lbnQgPSAkKGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkRWxlbWVudCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkNvbmZpcm1QYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZDJFbGVtZW50ID0gJChwYXNzd29yZDJTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkN1cnJlbnRQYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRjdXJyZW50UGFzc3dvcmQgPSAkKGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBUaGlzIG9ubHkgaGFuZGxlcyB0aGUgY3VzdG9tIGZpZWxkcywgc3RhbmRhcmQgZmllbGRzIGFyZSBhZGRlZCBiZWxvd1xuICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgIGlmICgkZW1haWxFbGVtZW50KSB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0RW1haWxWYWxpZGF0aW9uKGVkaXRWYWxpZGF0b3IsIGVtYWlsU2VsZWN0b3IsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkudmFsaWRfZW1haWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwYXNzd29yZEVsZW1lbnQgJiYgJHBhc3N3b3JkMkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGFzc3dvcmQ6IGVudGVyUGFzc3dvcmQsIHBhc3N3b3JkX21hdGNoOiBtYXRjaFBhc3N3b3JkIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZDJTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICBlZGl0VmFsaWRhdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcbiAgICAgICAgICAgICAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QoZW50ZXJQYXNzd29yZCwgZW50ZXJQYXNzd29yZCwgbWF0Y2hQYXNzd29yZCwgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cy5lcnJvciksXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGN1cnJlbnRQYXNzd29yZCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBjdXJyZW50UGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gJycgJiYgJHBhc3N3b3JkRWxlbWVudC52YWwoKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmN1cnJlbnRQYXNzd29yZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X2ZpcnN0bmFtZSddYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZmlyc3ROYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9sYXN0bmFtZSddYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQubGFzdE5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkZWRpdEFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoZWRpdFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlYXJsaWVzdEVycm9yID0gJCgnc3Bhbi5mb3JtLWlubGluZU1lc3NhZ2U6Zmlyc3QnKS5wcmV2KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGVhcmxpZXN0RXJyb3IuZm9jdXMoKTtcbiAgICAgICAgICAgIH0sIDkwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pIHtcbiAgICAgICAgY29uc3QgaW5ib3hWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgZGVsYXk6IDkwMCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5ib3hWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBzZWxlY3RbbmFtZT1cIm1lc3NhZ2Vfb3JkZXJfaWRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBOdW1iZXIodmFsKSAhPT0gMDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJPcmRlck51bSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbbmFtZT1cIm1lc3NhZ2Vfc3ViamVjdFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyU3ViamVjdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gdGV4dGFyZWFbbmFtZT1cIm1lc3NhZ2VfY29udGVudFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyTWVzc2FnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRpbmJveEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGluYm94VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoaW5ib3hWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlYXJsaWVzdEVycm9yID0gJCgnc3Bhbi5mb3JtLWlubGluZU1lc3NhZ2U6Zmlyc3QnKS5wcmV2KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGVhcmxpZXN0RXJyb3IuZm9jdXMoKTtcbiAgICAgICAgICAgIH0sIDkwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBjcmVkaXRjYXJkcyBmcm9tICdjcmVkaXRjYXJkcyc7XG5cbi8qKlxuICogT21pdCBudWxsIG9yIGVtcHR5IHN0cmluZyBwcm9wZXJ0aWVzIG9mIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuY29uc3Qgb21pdE51bGxTdHJpbmcgPSBvYmogPT4ge1xuICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcblxuICAgICQuZWFjaChyZWZPYmosIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGRlbGV0ZSByZWZPYmpba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlZk9iajtcbn07XG5cbi8qKlxuICogR2V0IGNyZWRpdCBjYXJkIHR5cGUgZnJvbSBjcmVkaXQgY2FyZCBudW1iZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICovXG5leHBvcnQgY29uc3QgY3JlZGl0Q2FyZFR5cGUgPSB2YWx1ZSA9PiBjcmVkaXRjYXJkcy5jYXJkLnR5cGUoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh2YWx1ZSksIHRydWUpO1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIGFqYXggcmVxdWVzdCB0byBzdG9yZSBhIG5ldyBpbnN0cnVtZW50IGluIGJpZ3BheVxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBoZWFkZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBSZXByZXNlbnRpbmcgdGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgYm9keVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZG9uZSBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgc3VjY2Vzc2Z1bCByZXNwb25zZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZmFpbCBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgdW5zdWNjZXNzZnVsIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjb25zdCBzdG9yZUluc3RydW1lbnQgPSAoe1xuICAgIC8vIEhvc3RuYW1lLCBJZHMgJiBUb2tlblxuICAgIHBheW1lbnRzVXJsLFxuICAgIHNob3BwZXJJZCxcbiAgICBzdG9yZUhhc2gsXG4gICAgdmF1bHRUb2tlbixcbn0sIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIC8vIFByb3ZpZGVyIEluZm9cbiAgICBwcm92aWRlcl9pZCxcbiAgICBjdXJyZW5jeV9jb2RlLFxuXG4gICAgLy8gSW5zdHJ1bWVudCBEZXRhaWxzXG4gICAgY3JlZGl0X2NhcmRfbnVtYmVyLFxuICAgIGV4cGlyYXRpb24sXG4gICAgbmFtZV9vbl9jYXJkLFxuICAgIGN2dixcbiAgICBkZWZhdWx0X2luc3RydW1lbnQsXG5cbiAgICAvLyBCaWxsaW5nIEFkZHJlc3NcbiAgICBhZGRyZXNzMSxcbiAgICBhZGRyZXNzMixcbiAgICBjaXR5LFxuICAgIHBvc3RhbF9jb2RlLFxuICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXG4gICAgY291bnRyeV9jb2RlLFxuICAgIGNvbXBhbnksXG4gICAgZmlyc3RfbmFtZSxcbiAgICBsYXN0X25hbWUsXG4gICAgZW1haWwsXG4gICAgcGhvbmUsXG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xufSwgZG9uZSwgZmFpbCkgPT4ge1xuICAgIGNvbnN0IGV4cGlyeSA9IGV4cGlyYXRpb24uc3BsaXQoJy8nKTtcblxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYCR7cGF5bWVudHNVcmx9L3N0b3Jlcy8ke3N0b3JlSGFzaH0vY3VzdG9tZXJzLyR7c2hvcHBlcklkfS9zdG9yZWRfaW5zdHJ1bWVudHNgLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiB2YXVsdFRva2VuLFxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGluc3RydW1lbnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2FyZCcsXG4gICAgICAgICAgICAgICAgY2FyZGhvbGRlcl9uYW1lOiBuYW1lX29uX2NhcmQsXG4gICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKGNyZWRpdF9jYXJkX251bWJlciksXG4gICAgICAgICAgICAgICAgZXhwaXJ5X21vbnRoOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksXG4gICAgICAgICAgICAgICAgZXhwaXJ5X3llYXI6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpLFxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbl92YWx1ZTogY3Z2LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbGxpbmdfYWRkcmVzczogb21pdE51bGxTdHJpbmcoe1xuICAgICAgICAgICAgICAgIGFkZHJlc3MxLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MyLFxuICAgICAgICAgICAgICAgIGNpdHksXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUsXG4gICAgICAgICAgICAgICAgc3RhdGVfb3JfcHJvdmluY2VfY29kZSxcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2NvZGUsXG4gICAgICAgICAgICAgICAgY29tcGFueSxcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwaG9uZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcHJvdmlkZXJfaWQsXG4gICAgICAgICAgICBkZWZhdWx0X2luc3RydW1lbnQsXG4gICAgICAgICAgICBjdXJyZW5jeV9jb2RlLFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgICAgICAuZG9uZShkb25lKVxuICAgICAgICAuZmFpbChmYWlsKTtcbn07XG5cbmV4cG9ydCBjb25zdCBGb3JtYXR0ZXJzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGNyZWRpdCBjYXJkIG51bWJlclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldENyZWRpdENhcmROdW1iZXJGb3JtYXQ6IGZpZWxkID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSBjcmVkaXRjYXJkcy5jYXJkLmZvcm1hdChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIGZvcm1hdCBmb3IgZXhwaXJhdGlvbiBkYXRlXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0RXhwaXJhdGlvbkZvcm1hdDogZmllbGQgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCwgd2hpY2ggfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAod2hpY2ggPT09IDggJiYgLy4qKFxcLykkLy50ZXN0KHRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC52YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCA1KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdoaWNoICE9PSA4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzEtOV1cXC98WzItOV0pJC9nLCAnMCQxLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKSQvZywgJyQxLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMC0xXSkoWzMtOV0pJC9nLCAnMCQxLyQyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKDBbMS05XXwxWzAtMl0pKFswLTldezJ9KSQvZywgJyQxLyQyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswXSspXFwvfFswXSskL2csICcwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcZFxcL118XltcXC9dKiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwvL2csICcvJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGNyZWRpdCBjYXJkIG51bWJlclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY2FyZC5pc1ZhbGlkKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBleHBpcmF0aW9uIGRhdGVcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldEV4cGlyYXRpb25WYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBpcnkgPSB2YWwuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgL14oMFsxLTldfDFbMC0yXSlcXC8oWzAtOV17Mn0pJC8udGVzdCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgIWNyZWRpdGNhcmRzLmV4cGlyYXRpb24uaXNQYXN0KGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSwgY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi55ZWFyLnBhcnNlKGV4cGlyeVsxXSwgdHJ1ZSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgbmFtZSBvbiBjYXJkXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXROYW1lT25DYXJkVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gISF2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3Z2XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge2FueX0gY2FyZFR5cGUgVGhlIGNyZWRpdCBjYXJkIG51bWJlciB0eXBlXG4gICAgICovXG4gICAgc2V0Q3Z2VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSwgY2FyZFR5cGUpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgY2FyZFR5cGUgPT09ICdmdW5jdGlvbicgPyBjYXJkVHlwZSgpIDogY2FyZFR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY3ZjLmlzVmFsaWQodmFsLCB0eXBlKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcbiIsImltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxzKSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJscy5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyBub0NvbXBhcmVNZXNzYWdlLCB1cmxzIH0pIHtcbiAgICBsZXQgY29tcGFyZUNvdW50ZXIgPSBbXTtcblxuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICQoJ2JvZHknKS5vbignY29tcGFyZVJlc2V0JywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGNvbXBhcmVDb3VudGVyID0gJGNoZWNrZWQubGVuZ3RoID8gJGNoZWNrZWQubWFwKChpbmRleCwgZWxlbWVudCkgPT4gZWxlbWVudC52YWx1ZSkuZ2V0KCkgOiBbXTtcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNvbXBhcmVMaW5rLCB1cmxzKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJscyk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChub0NvbXBhcmVNZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwibm9kIiwiV2lzaGxpc3QiLCJ2YWxpZGF0aW9uIiwic3RhdGVDb3VudHJ5IiwiY2xhc3NpZnlGb3JtIiwiVmFsaWRhdG9ycyIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiY3JlZGl0Q2FyZFR5cGUiLCJzdG9yZUluc3RydW1lbnQiLCJDQ1ZhbGlkYXRvcnMiLCJGb3JtYXR0ZXJzIiwiQ0NGb3JtYXR0ZXJzIiwic2hvd0FsZXJ0TW9kYWwiLCJjb21wYXJlUHJvZHVjdHMiLCJBY2NvdW50IiwiX1BhZ2VNYW5hZ2VyIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCIkc3RhdGUiLCIkIiwiJGJvZHkiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiJGVkaXRBY2NvdW50Rm9ybSIsIiRhZGRyZXNzRm9ybSIsIiRpbmJveEZvcm0iLCIkYWNjb3VudFJldHVybkZvcm0iLCIkcGF5bWVudE1ldGhvZEZvcm0iLCIkcmVvcmRlckZvcm0iLCIkaW52b2ljZUJ1dHRvbiIsIiRiaWdDb21tZXJjZSIsIndpbmRvdyIsIkJpZ0NvbW1lcmNlIiwicGFzc3dvcmRSZXF1aXJlbWVudHMiLCJsb2FkIiwibGVuZ3RoIiwicmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24iLCJpcyIsIm9uIiwibGVmdCIsInNjcmVlbiIsImF2YWlsV2lkdGgiLCJ0b3AiLCJhdmFpbEhlaWdodCIsInVybCIsImRhdGEiLCJvcGVuIiwiaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbiIsInJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uIiwiaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbiIsImluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24iLCJpbml0UmVvcmRlckZvcm0iLCJyZW5kZXJBY2NvdW50UGF5bWVudHMiLCJfdGhpcyRjb250ZXh0IiwiY291bnRyaWVzIiwicGF5bWVudHNVcmwiLCJzdG9yZUhhc2giLCJzdG9yZUxvY2FsZSIsInZhdWx0VG9rZW4iLCJzaG9wcGVySWQiLCJjdXN0b21lckVtYWlsIiwicHJvdmlkZXJJZCIsImN1cnJlbmN5Q29kZSIsInBheW1lbnRNZXRob2RzVXJsIiwicGF5bWVudFByb3ZpZGVySW5pdGlhbGl6YXRpb25EYXRhIiwidGhlbWVTZXR0aW5ncyIsInN0eWxlcyIsImlucHV0QmFzZSIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJpbnB1dFZhbGlkYXRpb25FcnJvciIsImlucHV0VmFsaWRhdGlvblN1Y2Nlc3MiLCJzdWJtaXRCdXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiLCJjYW5jZWxCdXR0b24iLCJsYWJlbCIsInZhbGlkYXRpb25FcnJvciIsImhlYWRpbmciLCJzdG9yZUNvbnRleHREYXRhIiwiZXJyb3JIYW5kbGVyIiwiYmluZERlbGV0ZUFkZHJlc3MiLCJiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCIsImV2ZW50IiwibWVzc2FnZSIsImN1cnJlbnRUYXJnZXQiLCJjb25maXJtIiwicHJldmVudERlZmF1bHQiLCJfdGhpczIiLCIkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzIiwic3VibWl0Rm9ybSIsImZpbmQiLCJyZW1vdmUiLCJlYWNoIiwiaW5kZXgiLCJwcm9kdWN0Q2hlY2tib3giLCJwcm9kdWN0SWQiLCJ2YWwiLCIkaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXBwZW5kIiwic2VsZWN0SXRlbSIsIl90aGlzMyIsInZhbGlkYXRpb25Nb2RlbCIsInN0YXRlU2VsZWN0b3IiLCIkc3RhdGVFbGVtZW50IiwiYWRkcmVzc1ZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsImFkZCIsIiRsYXN0IiwiZXJyIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJmaWVsZF9ub3RfYmxhbmsiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZXJyb3JNZXNzYWdlIiwiZm9ybVN1Ym1pdCIsImkiLCJlbGUiLCJwYXJzZUludCIsIl90aGlzNCIsImF0dHIiLCJmaXJzdE5hbWVMYWJlbCIsImxhc3ROYW1lTGFiZWwiLCJjb21wYW55TGFiZWwiLCJwaG9uZUxhYmVsIiwiYWRkcmVzczFMYWJlbCIsImFkZHJlc3MyTGFiZWwiLCJjaXR5TGFiZWwiLCJjb3VudHJ5TGFiZWwiLCJjaG9vc2VDb3VudHJ5TGFiZWwiLCJzdGF0ZUxhYmVsIiwicG9zdGFsQ29kZUxhYmVsIiwicGF5bWVudE1ldGhvZFNlbGVjdG9yIiwicGF5bWVudE1ldGhvZFZhbGlkYXRvciIsImNhcmRUeXBlIiwiX3JlZiIsInRhcmdldCIsInNpYmxpbmdzIiwiY3NzIiwic2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24iLCJjcmVkaXRDYXJkTnVtYmVyIiwic2V0RXhwaXJhdGlvblZhbGlkYXRpb24iLCJleHBpcmF0aW9uIiwic2V0TmFtZU9uQ2FyZFZhbGlkYXRpb24iLCJuYW1lT25DYXJkIiwic2V0Q3Z2VmFsaWRhdGlvbiIsImN2diIsInNldENyZWRpdENhcmROdW1iZXJGb3JtYXQiLCJzZXRFeHBpcmF0aW9uRm9ybWF0IiwiX3JlZHVjZSIsInNlcmlhbGl6ZUFycmF5Iiwib2JqIiwiaXRlbSIsInJlZk9iaiIsImNvdW50cnkiLCJfZmluZCIsIl9yZWYyIiwic3RhdGUiLCJzdGF0ZXMiLCJfcmVmMyIsImNvdW50cnlfY29kZSIsImNvZGUiLCJzdGF0ZV9vcl9wcm92aW5jZV9jb2RlIiwiZGVmYXVsdF9pbnN0cnVtZW50IiwibG9jYXRpb24iLCJocmVmIiwiZ2VuZXJpY19lcnJvciIsImZvcm1FZGl0U2VsZWN0b3IiLCJlZGl0VmFsaWRhdG9yIiwiZGVsYXkiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsInBhc3N3b3JkU2VsZWN0b3IiLCIkcGFzc3dvcmRFbGVtZW50IiwicGFzc3dvcmQyU2VsZWN0b3IiLCIkcGFzc3dvcmQyRWxlbWVudCIsImN1cnJlbnRQYXNzd29yZFNlbGVjdG9yIiwiJGN1cnJlbnRQYXNzd29yZCIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkX2VtYWlsIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwiZW50ZXJQYXNzd29yZCIsInBhc3N3b3JkIiwibWF0Y2hQYXNzd29yZCIsInBhc3N3b3JkX21hdGNoIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwiZXJyb3IiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJyZXN1bHQiLCJjdXJyZW50UGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldFRpbWVvdXQiLCJlYXJsaWVzdEVycm9yIiwicHJldiIsImZvY3VzIiwiaW5ib3hWYWxpZGF0b3IiLCJOdW1iZXIiLCJlbnRlck9yZGVyTnVtIiwiZW50ZXJTdWJqZWN0IiwiZW50ZXJNZXNzYWdlIiwiZGVmYXVsdCIsImNyZWRpdGNhcmRzIiwib21pdE51bGxTdHJpbmciLCJrZXkiLCJjYXJkIiwicGFyc2UiLCJkb25lIiwiZmFpbCIsInByb3ZpZGVyX2lkIiwiY3VycmVuY3lfY29kZSIsImNyZWRpdF9jYXJkX251bWJlciIsIm5hbWVfb25fY2FyZCIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjaXR5IiwicG9zdGFsX2NvZGUiLCJjb21wYW55IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmUiLCJleHBpcnkiLCJzcGxpdCIsImFqYXgiLCJkYXRhVHlwZSIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBY2NlcHQiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5zdHJ1bWVudCIsImNhcmRob2xkZXJfbmFtZSIsIm51bWJlciIsImV4cGlyeV9tb250aCIsIm1vbnRoIiwiZXhwaXJ5X3llYXIiLCJ5ZWFyIiwidmVyaWZpY2F0aW9uX3ZhbHVlIiwiYmlsbGluZ19hZGRyZXNzIiwicmVmVGFyZ2V0IiwiZm9ybWF0IiwiX3JlZjQiLCJ3aGljaCIsInRlc3QiLCJzbGljZSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJpc1ZhbGlkIiwiaXNQYXN0IiwiY3ZjIiwiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInB1c2giLCJ1cGRhdGVDb3VudGVyTmF2IiwiJGxpbmsiLCJ1cmxzIiwiYWRkQ2xhc3MiLCJjb21wYXJlIiwiam9pbiIsImh0bWwiLCJyZW1vdmVDbGFzcyIsIm5vQ29tcGFyZU1lc3NhZ2UiLCJjb21wYXJlQ291bnRlciIsIiRjb21wYXJlTGluayIsIiRjaGVja2VkIiwibWFwIiwiZWxlbWVudCIsImdldCIsInRyaWdnZXJIYW5kbGVyIiwicHJvZHVjdCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9