import { createDecorator } from 'decoration-ioc';

export interface CreationKitIniLocations {
    creationKitInstallUri: string;
    iniUris: string[];
}

export interface ICreationKitIniLocator {
    getIniLocations(workspaceUri: string): CreationKitIniLocations;
}

// tslint:disable-next-line:variable-name
export const ICreationKitIniLocator = createDecorator<ICreationKitIniLocator>(
    'creationKitIniLoader'
);