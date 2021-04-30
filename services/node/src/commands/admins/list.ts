import { CommandBase } from '../base';


export class List extends CommandBase implements ICommand {
    public readonly COMMAND_TYPE: CommandType = CommandType.LIST;
    public readonly COMMAND_BASE: string = 'admins';
    public readonly DESCRIPTION: string = 'Lists all project admins';
    public readonly AUTHORIZATION: Auth = Auth.NONE;
    public async relax (initiative: IInitiative): Promise<string> {
        const project = await CommandBase.getProject(initiative);
        if (typeof project === 'string') return String(project);

        if (project.admins.length > 0) {
            const collectionString = project.admins.map((v, i) => `${i + 1}. ${v.displayName}`).join('\n');

            return `List of admins are:\n\n${collectionString}`;
        } else {
            return 'There are no admins configured.';
        }
    }
}