Ext.define('PVE.ha.GroupSelector', {
    extend: 'PVE.form.ComboGrid',
    alias: ['widget.pveHAGroupSelector'],

    autoSelect: false,
    valueField: 'group',
    displayField: 'group',
    listConfig: {
	columns: [
	    {
		header: gettext('Group'),
		width: 100,
		sortable: true,
		dataIndex: 'group'
	    },
	    {
		header: gettext('Nodes'),
		width: 100,
		sortable: false,
		dataIndex: 'nodes'
	    },
	    {
		header: gettext('Comment'),
		flex: 1,
		dataIndex: 'comment'
	    }
	]
    },
    store: {
	    model: 'pve-ha-groups',
	    sorters: { 
		property: 'group', 
		order: 'DESC' 
	    }
    },

    initComponent: function() {
	var me = this;
	me.callParent();
	me.getStore().load();
    }

}, function() {

    Ext.define('pve-ha-groups', {
	extend: 'Ext.data.Model',
	fields: [ 
	    'group', 'type', 'restricted', 'digest', 'nofailback',
	    'nodes', 'comment'
	],
	proxy: {
            type: 'pve',
	    url: "/api2/json/cluster/ha/groups"
	},
	idProperty: 'group'
    });
});