(function(window,$,mw){"use strict";var popups=window.dev&&window.dev.ReferencePopups&&window.dev.ReferencePopups.Popup;if(!popups){popups=$.ajax({url:mw.config.get('wgLoadScript'),data:{mode:'articles',only:'scripts',articles:'w:dev:ReferencePopups/code.js'},dataType:'script',cache:!0}).then(function(){return window.dev.ReferencePopups.Popup;});}return function(callback){$.when(popups).done(function(){$(function($){callback(window,$,mw);});});};}(window,jQuery,mediaWiki))(function(window,$,mw){"use strict";var userConfig=window.dev.ReferencePopups.settings||{animate:!0};var $track=$([]);function findPopups(){$track=$($track.filter(':Lunarity-referencePopup').add($('.refpopups-custom-element').filter(':not(:Lunarity-referencePopup)').filter(function(){var $this=$(this),$content=$this.find('> .refpopups-custom-content');if(!$content.length){var $loadContext=$this.closest('#mw-content-text, .WikiaArticle, .msg-body');$content=$this.data('load-from');var loadFrom=!0;if(!$content){
loadFrom=!1;$content=$this.data('move-from');}if($content){try{$content=$loadContext.find($content);}catch(e){if(window.console){window.console.error('Page contains invalid Custom Reference Popup selector: '+$content);}return;}}if(!$content||!$content.length){return;}$content=$content.eq(0);if(loadFrom){$content=$content.clone();$content.find('*').prop('id','');}}$this.referencePopup({content:$content.contents(),activateBy:userConfig.react,hoverDelay:userConfig.hoverDelay,animation:!1,stickyHover:!1,escapeCloses:!1,extraClass:$this.data('popup-class')||$content.data('popup-class')||'',contentBoxClass:'WikiaArticle'});$content.remove();return true;})));}if(mw.config.get('skin')==='oasis'&&mw.config.get('wgAction')==='edit'){$(window).on('EditPageAfterRenderPreview.ReferencePopupsCustom',function(){findPopups();});}findPopups();$(window).on('dev-ReferencePopups-config',function(ev,newSettings){userConfig=newSettings||{animate:!0};$track=$($track.filter(
':Lunarity-referencePopup')).referencePopup('option',{activateBy:userConfig.react,hoverDelay:userConfig.hoverDelay,animation:!1});});window.dev.ReferencePopups.loadCustom=findPopups;});;;mw.loader.state({"wikia.fake.articles.c909f2044ceb6e5ae3e0fc7b3a92e046":"ready"});

/* cache key: typemoon:resourceloader:filter:minify-js:7:74dcb9e118a77d63dba81da6654420aa */