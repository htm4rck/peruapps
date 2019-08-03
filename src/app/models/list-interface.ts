import { UserInterface } from './user-interface';

export interface ListInterface{
    page?: string,
    per_page?: string,
    total?: string,
    total_page?: string,
    data?: UserInterface
}