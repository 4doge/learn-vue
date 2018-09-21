let editUser = {
    name: 'editUser',
    template: '#edit-user',
    data: function() {
        return {
            showEditForm: false
        }
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        showHideEditForm: function() {
            this.showEditForm = !this.showEditForm;
        },
        updateUser: function(user) {
            let url = 'http://localhost:9999/users/' + user.id;
            axios.put(url, {
                firstName: user.firstName,
                lastName: user.lastName,
                company: user.company
            }).then(response => {
                this.users = response.data;
            });
        }
    },
};

let usersList = {
    name: 'UsersList',
    template: '#users-list',
    props: {
        users: {
            type: Array,
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
    },
    components: {
        'edit-user': editUser
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
        },
        toggleTableButtonText: function() {
            return this.showUsersTable ? 'Hide' : 'Show';
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
