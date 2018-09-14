new Vue({
    el: '#app',
    data: function() {
        return {
            showUsersTable: true,
            users: [
                {
                    'first_name': 'nora',
                    'last_name': 'rivera',
                    'photo': 'https://randomuser.me/api/portraits/women/57.jpg'
                },
                {
                    'first_name': 'lucas',
                    'last_name': 'johnson'
                },
                {
                    'first_name': 'duane',
                    'last_name': 'meyer',
                    'photo': 'https://randomuser.me/api/portraits/men/53.jpg'
                },
                {
                    'first_name': 'ben',
                    'last_name': 'mills',
                    'photo': 'https://randomuser.me/api/portraits/men/69.jpg'
                },
                {
                    'first_name': 'avery',
                    'last_name': 'alexander'
                }
            ]
        }
    },
    computed: {
        usersLength: function() {
            return this.users.length;
        }
    },
    methods: {
        showHideUsersTable: function() {
            this.showUsersTable = !this.showUsersTable;
        },
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
});
