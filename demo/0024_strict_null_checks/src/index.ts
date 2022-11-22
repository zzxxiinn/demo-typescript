function getId(x: Element) {
    return x.id
}

// TypeScript does not complain, but this is a runtime error.
// TypeScript 2.0 adds support for strict null checks.
// If you set --strictNullChecks when running tsc (or set
// this flag in your tsconfig.json), then types no longer permit null:

getId(null)



function getUId(x: Element | null) {
    if (x) {
        return x.id; // In this branch, x's type is Element
    } else {
        return null; // In this branch, x's type is null.
    }
}

getId(null);