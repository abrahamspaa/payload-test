"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    withMergedProps: function() {
        return _WithMergedProps.withMergedProps;
    },
    afterReadPromise: function() {
        return _promise.promise;
    },
    afterReadTraverseFields: function() {
        return _traverseFields.traverseFields;
    },
    extractTranslations: function() {
        return _extractTranslations.extractTranslations;
    },
    i18nInit: function() {
        return _init.i18nInit;
    },
    combineMerge: function() {
        return _combineMerge.combineMerge;
    },
    configToJSONSchema: function() {
        return _configToJSONSchema.configToJSONSchema;
    },
    entityToJSONSchema: function() {
        return _configToJSONSchema.entityToJSONSchema;
    },
    withNullableJSONSchemaType: function() {
        return _configToJSONSchema.withNullableJSONSchemaType;
    },
    createArrayFromCommaDelineated: function() {
        return _createArrayFromCommaDelineated.createArrayFromCommaDelineated;
    },
    deepCopyObject: function() {
        return _deepCopyObject.deepCopyObject;
    },
    deepMerge: function() {
        return _deepMerge.deepMerge;
    },
    fieldSchemaToJSON: function() {
        return _fieldSchemaToJSON.fieldSchemaToJSON;
    },
    flattenTopLevelFields: function() {
        return _flattenTopLevelFields.default;
    },
    formatLabels: function() {
        return _formatLabels.formatLabels;
    },
    formatNames: function() {
        return _formatLabels.formatNames;
    },
    toWords: function() {
        return _formatLabels.toWords;
    },
    getIDType: function() {
        return _getIDType.getIDType;
    },
    getTranslation: function() {
        return _getTranslation.getTranslation;
    },
    isValidID: function() {
        return _isValidID.isValidID;
    }
});
const _WithMergedProps = require("./dist/admin/components/utilities/WithMergedProps");
const _promise = require("./dist/fields/hooks/afterRead/promise");
const _traverseFields = require("./dist/fields/hooks/afterRead/traverseFields");
const _extractTranslations = require("./dist/translations/extractTranslations");
const _init = require("./dist/translations/init");
const _combineMerge = require("./dist/utilities/combineMerge");
const _configToJSONSchema = require("./dist/utilities/configToJSONSchema");
const _createArrayFromCommaDelineated = require("./dist/utilities/createArrayFromCommaDelineated");
const _deepCopyObject = require("./dist/utilities/deepCopyObject");
const _deepMerge = require("./dist/utilities/deepMerge");
const _fieldSchemaToJSON = require("./dist/utilities/fieldSchemaToJSON");
const _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("./dist/utilities/flattenTopLevelFields"));
const _formatLabels = require("./dist/utilities/formatLabels");
const _getIDType = require("./dist/utilities/getIDType");
const _getTranslation = require("./dist/utilities/getTranslation");
const _isValidID = require("./dist/utilities/isValidID");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHBvcnRzL3V0aWxpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB3aXRoTWVyZ2VkUHJvcHMgfSBmcm9tICcuLi9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9XaXRoTWVyZ2VkUHJvcHMnXG5leHBvcnQgeyBwcm9taXNlIGFzIGFmdGVyUmVhZFByb21pc2UgfSBmcm9tICcuLi9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkL3Byb21pc2UnXG5leHBvcnQgeyB0cmF2ZXJzZUZpZWxkcyBhcyBhZnRlclJlYWRUcmF2ZXJzZUZpZWxkcyB9IGZyb20gJy4uL2ZpZWxkcy9ob29rcy9hZnRlclJlYWQvdHJhdmVyc2VGaWVsZHMnXG5cbmV4cG9ydCB7IGV4dHJhY3RUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi90cmFuc2xhdGlvbnMvZXh0cmFjdFRyYW5zbGF0aW9ucydcbmV4cG9ydCB7IGkxOG5Jbml0IH0gZnJvbSAnLi4vdHJhbnNsYXRpb25zL2luaXQnXG5leHBvcnQgeyBjb21iaW5lTWVyZ2UgfSBmcm9tICcuLi91dGlsaXRpZXMvY29tYmluZU1lcmdlJ1xuXG5leHBvcnQge1xuICBjb25maWdUb0pTT05TY2hlbWEsXG4gIGVudGl0eVRvSlNPTlNjaGVtYSxcbiAgd2l0aE51bGxhYmxlSlNPTlNjaGVtYVR5cGUsXG59IGZyb20gJy4uL3V0aWxpdGllcy9jb25maWdUb0pTT05TY2hlbWEnXG5leHBvcnQgeyBjcmVhdGVBcnJheUZyb21Db21tYURlbGluZWF0ZWQgfSBmcm9tICcuLi91dGlsaXRpZXMvY3JlYXRlQXJyYXlGcm9tQ29tbWFEZWxpbmVhdGVkJ1xuXG5leHBvcnQgeyBkZWVwQ29weU9iamVjdCB9IGZyb20gJy4uL3V0aWxpdGllcy9kZWVwQ29weU9iamVjdCdcbmV4cG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uL3V0aWxpdGllcy9kZWVwTWVyZ2UnXG5leHBvcnQgeyBmaWVsZFNjaGVtYVRvSlNPTiB9IGZyb20gJy4uL3V0aWxpdGllcy9maWVsZFNjaGVtYVRvSlNPTidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmxhdHRlblRvcExldmVsRmllbGRzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2ZsYXR0ZW5Ub3BMZXZlbEZpZWxkcydcbmV4cG9ydCB7IGZvcm1hdExhYmVscywgZm9ybWF0TmFtZXMsIHRvV29yZHMgfSBmcm9tICcuLi91dGlsaXRpZXMvZm9ybWF0TGFiZWxzJ1xuZXhwb3J0IHsgZ2V0SURUeXBlIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2dldElEVHlwZSdcbmV4cG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuXG5leHBvcnQgeyBpc1ZhbGlkSUQgfSBmcm9tICcuLi91dGlsaXRpZXMvaXNWYWxpZElEJ1xuIl0sIm5hbWVzIjpbIndpdGhNZXJnZWRQcm9wcyIsImFmdGVyUmVhZFByb21pc2UiLCJwcm9taXNlIiwiYWZ0ZXJSZWFkVHJhdmVyc2VGaWVsZHMiLCJ0cmF2ZXJzZUZpZWxkcyIsImV4dHJhY3RUcmFuc2xhdGlvbnMiLCJpMThuSW5pdCIsImNvbWJpbmVNZXJnZSIsImNvbmZpZ1RvSlNPTlNjaGVtYSIsImVudGl0eVRvSlNPTlNjaGVtYSIsIndpdGhOdWxsYWJsZUpTT05TY2hlbWFUeXBlIiwiY3JlYXRlQXJyYXlGcm9tQ29tbWFEZWxpbmVhdGVkIiwiZGVlcENvcHlPYmplY3QiLCJkZWVwTWVyZ2UiLCJmaWVsZFNjaGVtYVRvSlNPTiIsImZsYXR0ZW5Ub3BMZXZlbEZpZWxkcyIsImZvcm1hdExhYmVscyIsImZvcm1hdE5hbWVzIiwidG9Xb3JkcyIsImdldElEVHlwZSIsImdldFRyYW5zbGF0aW9uIiwiaXNWYWxpZElEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFTQSxlQUFlO2VBQWZBLGdDQUFlOztJQUNKQyxnQkFBZ0I7ZUFBM0JDLGdCQUFPOztJQUNXQyx1QkFBdUI7ZUFBekNDLDhCQUFjOztJQUVkQyxtQkFBbUI7ZUFBbkJBLHdDQUFtQjs7SUFDbkJDLFFBQVE7ZUFBUkEsY0FBUTs7SUFDUkMsWUFBWTtlQUFaQSwwQkFBWTs7SUFHbkJDLGtCQUFrQjtlQUFsQkEsc0NBQWtCOztJQUNsQkMsa0JBQWtCO2VBQWxCQSxzQ0FBa0I7O0lBQ2xCQywwQkFBMEI7ZUFBMUJBLDhDQUEwQjs7SUFFbkJDLDhCQUE4QjtlQUE5QkEsOERBQThCOztJQUU5QkMsY0FBYztlQUFkQSw4QkFBYzs7SUFDZEMsU0FBUztlQUFUQSxvQkFBUzs7SUFDVEMsaUJBQWlCO2VBQWpCQSxvQ0FBaUI7O0lBQ05DLHFCQUFxQjtlQUFyQkEsOEJBQXFCOztJQUNoQ0MsWUFBWTtlQUFaQSwwQkFBWTs7SUFBRUMsV0FBVztlQUFYQSx5QkFBVzs7SUFBRUMsT0FBTztlQUFQQSxxQkFBTzs7SUFDbENDLFNBQVM7ZUFBVEEsb0JBQVM7O0lBQ1RDLGNBQWM7ZUFBZEEsOEJBQWM7O0lBRWRDLFNBQVM7ZUFBVEEsb0JBQVM7OztpQ0F2QmM7eUJBQ1k7Z0NBQ2M7cUNBRXRCO3NCQUNYOzhCQUNJO29DQU10QjtnREFDd0M7Z0NBRWhCOzJCQUNMO21DQUNROzhFQUNlOzhCQUNFOzJCQUN6QjtnQ0FDSzsyQkFFTCJ9