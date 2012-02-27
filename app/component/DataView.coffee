Ext.define("Cv.component.DataView"
    extend: 'Ext.DataView'
    xtype: 'cvdataview'
    defaultPageSize: 5
    config:
        baseCls: Ext.baseCSSPrefix + 'list'
        cls: 'cv-dataview'
        itemCls: 'cv-list-item'
        selectedCls:''
        scrollable:
            direction: 'vertical'
            directionLock: true
        scrollToTopOnRefresh: false
        pageSize: 5
        currentPage: 1
    #storeEventHooks: beforeload
    onBeforeLoad: ->
        @callParent()
    #storeEventHooks: load
    onLoad: (store)->
        @callParent(store)
    #storeEventHooks: refresh
    refresh: ->
        @callParent()
    #storeEventHooks: addrecords
    onStoreAdd: (store, records)->
        @callParent(store, records)
    #storeEventHooks: removerecords
    onStoreRemove: (store, records, indices)->
        @callParent(store, records, indices)
    #storeEventHooks: updaterecord
    onStoreUpdate: (store, record, newIndex, oldIndex)->
        @callParent(store, record, newIndex, oldIndex)
    doRefresh: (me)->
        container = me.container
        store = me.getStore()
        records = store.getRange()
        items = container.getViewItems()
        recordsLn = records.length
        itemsLn = items.length
        pageSize = @getPageSize()
        if not pageSize
            pageSize = @getDefaultPageSize()
        #not use now, will improve later
        currentPage = @getCurrentPage()
        if not currentPage
            currentPage = 1
        deltaLn = recordsLn - itemsLn
        
        scrollable = me.getScrollable()
        if this.getScrollToTopOnRefresh() && scrollable
            scrollable.getScroller().scrollToTop();

        #No items, hide all the items from the collection.
        if recordsLn < 1
            me.onStoreClear();
            return;

        #Too many items, hide the unused ones
        if deltaLn < 0
            container.moveItemsToCache(itemsLn + deltaLn, itemsLn - 1);
            #Items can changed, we need to refresh our references
            items = container.getViewItems();
            itemsLn = items.length;
        #Not enough items, create new ones
        else if deltaLn > 0
            #limit size
            pageSize -= 1
            pageSize = if recordsLn > pageSize then pageSize else recordsLn
            container.moveItemsFromCache(store.getRange(0, pageSize));
            #container.moveItemsFromCache(store.getRange(itemsLn));

        #Update Data and insert the new html for existing items
        for item,i in items
            container.updateListItem(records[i], item)
)
