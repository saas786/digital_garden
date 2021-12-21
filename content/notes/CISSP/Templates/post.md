---
title: <% tp.file.title %>
aliases: [<% tp.file.title %>, <% tp.file.title %>s, <% tp.user.lower(tp.file.title) %>, <% tp.user.lower(tp.file.title) %>s]
tags: []
plugin-prettier: true
url: <% tp.user.path(tp.file.path()) %>
---

<% tp.file.cursor(1) %>

created: <% tp.file.creation_date() %>
modified: <%+ tp.file.last_modified_date() %>
