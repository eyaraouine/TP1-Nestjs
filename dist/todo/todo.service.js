"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const todos_status_enum_1 = require("./enums/todos_status.enum");
let TodoService = class TodoService {
    constructor() {
        this.todos = [];
    }
    getTodos() {
        return this.todos;
    }
    addTodo(addTodo) {
        const newTodo = Object.assign({ id: this.uuid(), createdAt: new Date(), status: todos_status_enum_1.TodoStatusEnum.waiting }, addTodo);
        this.todos.push(newTodo);
        return newTodo;
    }
    getTodoById(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo)
            return todo;
        else {
            throw new common_1.NotFoundException(`Le todo d'id ${id} n'existe pas`);
        }
    }
    deleteTodo(id) {
        const todoToDelete = this.getTodoById(id);
        const todoIndex = this.todos.findIndex(todo => todo.id == id);
        this.todos.splice(todoIndex, 1);
        return todoToDelete;
    }
    updateTodo(id, updateTodo) {
        const todoToUpdate = this.getTodoById(id);
        todoToUpdate.name = updateTodo.name ? updateTodo.name : todoToUpdate.name;
        todoToUpdate.status = updateTodo.status ? updateTodo.status : todoToUpdate.status;
        todoToUpdate.description = updateTodo.description ? updateTodo.description : todoToUpdate.description;
        return todoToUpdate;
    }
};
__decorate([
    (0, common_1.Inject)('UUID'),
    __metadata("design:type", Function)
], TodoService.prototype, "uuid", void 0);
TodoService = __decorate([
    (0, common_1.Injectable)()
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map