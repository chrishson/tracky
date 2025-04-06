# README

## Prerequisites
- using Ruby 3.4.2 
  - can use a ruby version manager like rbenv/rvm
- `gem install rails`
- `brew install tmux`
- `brew install overmind`
  - the server (better than puma)
- have npm installed on your machine

## Running this Project
```bash
bundle install
rails db:migrate

npm install 
//- for Vite

overmind start -f Procfile.dev
//- to start the server
```

### browser address
```
http://localhost:5100/task-lists
```
