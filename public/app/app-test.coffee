list = ['peter', 'mary']
temp = _.template('''
    <% _.each(list, function(obj){%>
        <li>obj<li>
    <%});%>

''')

console.log temp({'list': list})
