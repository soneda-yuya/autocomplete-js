;(function(window, undefined) {
    'use strict';
    var autoComplete = {
        exec : function(e) {
            var inputTarget = e.currentTarget
            var s = inputTarget.value
            var targetListName = inputTarget.getAttribute("datalist")
            var autoCompleteBox = document.getElementById(targetListName + "-autocomplete")

            while (autoCompleteBox.firstChild) {
                var fc = autoCompleteBox.firstChild
                autoCompleteBox.removeChild(autoCompleteBox.firstChild)
                fc.removeEventListener("click", setValue, false)
                fc = null
            }

            if (s != "") {
                var datalist = document.getElementById(targetListName)
                var optionss = datalist.querySelectorAll("option")
                optionss.forEach(function(element){
                    if (element.nodeName != "#text") {
                        var re = new RegExp (s);
                        if (element.value.match(re)) {
                            var child = document.createElement('li');
                            child.addEventListener("click", setValue, false);
                            child.innerHTML = element.value
                            child.classList.add(targetListName)
                            autoCompleteBox.appendChild(child)
                        }
                    }
                });
            }

            function setValue(e) {
                var target = e.currentTarget
                var inputTarget = document.querySelector('[datalist=' + target.className + ']');
                inputTarget.value = this.innerHTML
            }
        },

        remove: function(e){
            var inputTarget = e.currentTarget
            window.setTimeout(function(){
                var targetListName = inputTarget.getAttribute("datalist")
                var autoCompleteBox = document.getElementById(targetListName + "-autocomplete")
                while (autoCompleteBox.firstChild) {
                    var fc = autoCompleteBox.firstChild
                    autoCompleteBox.removeChild(autoCompleteBox.firstChild)
                    fc.removeEventListener("click", self.hoge, false)
                    fc = null
                }
            }, 100)
        }
    }
    module.exports = autoComplete

})(typeof window != 'undefined' ? window : void 0);