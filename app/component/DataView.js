(function() {

  Ext.define("Cv.component.DataView", {
    extend: 'Ext.DataView',
    xtype: 'cvdataview',
    defaultPageSize: 5,
    config: {
      baseCls: Ext.baseCSSPrefix + 'list',
      cls: 'cv-dataview',
      itemCls: 'cv-list-item',
      scrollable: {
        direction: 'vertical',
        directionLock: true
      },
      scrollToTopOnRefresh: false,
      pageSize: 5,
      currentPage: 1
    },
    onBeforeLoad: function() {
      return this.callParent();
    },
    onLoad: function(store) {
      return this.callParent(store);
    },
    refresh: function() {
      return this.callParent();
    },
    onStoreAdd: function(store, records) {
      return this.callParent(store, records);
    },
    onStoreRemove: function(store, records, indices) {
      return this.callParent(store, records, indices);
    },
    onStoreUpdate: function(store, record, newIndex, oldIndex) {
      return this.callParent(store, record, newIndex, oldIndex);
    },
    doRefresh: function(me) {
      var container, currentPage, deltaLn, i, item, items, itemsLn, pageSize, records, recordsLn, scrollable, store, _len, _results;
      container = me.container;
      store = me.getStore();
      records = store.getRange();
      items = container.getViewItems();
      recordsLn = records.length;
      itemsLn = items.length;
      pageSize = this.getPageSize();
      if (!pageSize) pageSize = this.getDefaultPageSize();
      currentPage = this.getCurrentPage();
      if (!currentPage) currentPage = 1;
      deltaLn = recordsLn - itemsLn;
      scrollable = me.getScrollable();
      if (this.getScrollToTopOnRefresh() && scrollable) {
        scrollable.getScroller().scrollToTop();
      }
      if (recordsLn < 1) {
        me.onStoreClear();
        return;
      }
      if (deltaLn < 0) {
        container.moveItemsToCache(itemsLn + deltaLn, itemsLn - 1);
        items = container.getViewItems();
        itemsLn = items.length;
      } else if (deltaLn > 0) {
        pageSize -= 1;
        pageSize = recordsLn > pageSize ? pageSize : recordsLn;
        container.moveItemsFromCache(store.getRange(0, pageSize));
      }
      _results = [];
      for (i = 0, _len = items.length; i < _len; i++) {
        item = items[i];
        _results.push(container.updateListItem(records[i], item));
      }
      return _results;
    }
  });

}).call(this);
