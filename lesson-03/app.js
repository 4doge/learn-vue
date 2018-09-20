let usersList = {
    name: 'UsersList',
    template: '#users-list',
    props: {
        users: {
            type: Array,
            required: true
        },
        showUsersTable: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        copied: function(value) {
            alert(value + ' copied!');
        },
        getCopyData: function(first_name, last_name) {
            return this.$options.filters.capitalize(first_name) + ' ' +  this.$options.filters.capitalize(last_name);
        }
    },
    filters: {
        capitalize: function(value) {
            return value.charAt(0).toUpperCase() + value.substr(1);
        }
    }
};

new Vue({
    el: '#app',
    data: function() {
        return {
            showUsersTable: true,
            users: []
        }
    },
    watch: {
        users: function() {
            console.log('Users loaded');
        }
    },
    computed: {
        usersLength: function() {
            return this.users.length;
        }
    },
    mounted: function () {
        axios.get('http://localhost:9999/users').then(response => {
            this.users = response.data;
        });
    },
    methods: {
        showHideUsersTable: function() {
            this.showUsersTable = !this.showUsersTable;
        }
    },
    components: {
        'users-list': usersList
    }
});
