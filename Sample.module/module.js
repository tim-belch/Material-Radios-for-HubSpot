var belchmradio_ = (function(){
  return {
    init: function(){
      this.createListeners();
    },
    createListeners: function(){
      this.on("message", this.formLoaded.bind(this));
    },
    on: function(action, callback){
      window.addEventListener(action, callback);
    },
    formLoaded: function(event){
      if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
        this.form = window.$('form[data-form-id="' + event.data.id + '"]');
        this.form.find('li.hs-form-radio').each(function(i, elem){
          this.classMe(window.$(elem).find('label'), "mdl-radio mdl-js-radio mdl-js-ripple-effect");
        }.bind(this));
        this.form.find('li.hs-form-radio input').each(function(i, elem){
          this.classMe(window.$(elem), "mdl-radio__button");
        }.bind(this));
      }
    },
    classMe: function(elem, cssClass){
      elem.addClass(cssClass);
    }
  }
})();
belchmradio_.init();
