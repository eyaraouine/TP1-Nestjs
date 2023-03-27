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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const add_todo_dto_1 = require("./dto/add-todo.dto");
const todo_service_1 = require("./todo.service");
const todo_model_1 = require("../model/todo.model");
const todos_status_enum_1 = require("./enums/todos_status.enum");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    getTodos() {
        return this.todoService.getTodos();
    }
    addTodo(addTodo) {
        return this.todoService.addTodo(addTodo);
    }
    deleteTodo(id) {
        return this.todoService.deleteTodo(id);
    }
    updateTodo(updateTodo, id) {
        return this.todoService.updateTodo(id, updateTodo);
    }
    getTodo(id) {
        return this.todoService.getTodoById(id);
    }
    async addTodov2(todo) {
        return this.todoService.addTodov2(todo);
    }
    async updateTodov2(todo, id) {
        return this.todoService.updateTodov2(todo, id);
    }
    async deleteTodov2(id) {
        return this.todoService.deleteTodov2(id);
    }
    async softdelete(id) {
        return this.todoService.softDelete(id);
    }
    async restoreTodo(id) {
        return this.todoService.restoreTodo(id);
    }
    async getTodosv2() {
        return this.todoService.getTodosv2();
    }
    async getTodosv3ByQueryParams(criteria, status) {
        const params = { criteria, status };
        return this.todoService.getTodosv3ByQueryParams(params);
    }
    async getTodoByIdv2(id) {
        return this.todoService.getTodoByIdv2(id);
    }
    async getTodosv4ByQueryParams(status, criteria) {
        const params = { criteria, status };
        return this.todoService.getTodosv4ByQueryParams(params);
    }
    async countByStatus() {
        return this.todoService.countByStatus();
    }
    async getTodosv5ByPagination(page = 1, limit = 10) {
        return this.todoService.getTodosv5ByPagination(page, limit);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], TodoController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_todo_dto_1.AddTodoDto]),
    __metadata("design:returntype", todo_model_1.TodoModel)
], TodoController.prototype, "addTodo", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", todo_model_1.TodoModel)
], TodoController.prototype, "deleteTodo", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", todo_model_1.TodoModel)
], TodoController.prototype, "updateTodo", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", todo_model_1.TodoModel)
], TodoController.prototype, "getTodo", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Version)('2'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_todo_dto_1.AddTodoDto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "addTodov2", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.Version)('2'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "updateTodov2", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.Version)('2'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "deleteTodov2", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.Version)('3'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "softdelete", null);
__decorate([
    (0, common_1.Get)('/restore/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "restoreTodo", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Version)('2'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodosv2", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Version)('3'),
    __param(0, (0, common_1.Query)('criteria')),
    __param(1, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodosv3ByQueryParams", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.Version)('2'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodoByIdv2", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Version)('4'),
    __param(0, (0, common_1.Query)('status')),
    __param(1, (0, common_1.Query)('criteria')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodosv4ByQueryParams", null);
__decorate([
    (0, common_1.Get)('/count/bystatus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "countByStatus", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Version)('5'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodosv5ByPagination", null);
TodoController = __decorate([
    (0, common_1.Controller)('todos'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map