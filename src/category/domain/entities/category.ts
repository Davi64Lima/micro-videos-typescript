export type CategoryProperties = {
    name: string;
    is_active: boolean;
    description?: string;
    created_at?: Date;
}

export class Category {
    constructor(public readonly props: CategoryProperties) { }

    get name(): string {
        return this.props.name;
    }

    get description(): string | undefined {
        return this.props.description;
    }

    get isActive(): boolean {
        return this.props.is_active;
    }

    get createdAt(): Date | undefined {
        return this.props.created_at;
    }
}