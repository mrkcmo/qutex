import { CommandBase } from '../base';
import { BOT } from '../../bot';
import { Auth } from '../../enum';
import * as projectCard from '../../cards/project.json';

export class Card extends CommandBase implements ICommand {
    public static readonly AUTHORIZATION: Auth = Auth.NONE;
    public readonly COMMAND_TYPE: CommandType = CommandType.CARD;
    public readonly COMMAND_BASE: string = '^project(s?)$';
    public readonly DESCRIPTION: string = 'Shows the card relating to Qutex Projects';
    public async relax (initiative: IInitiative): Promise<string> {
        await BOT.messages.create({ ...projectCard, ...initiative.destination });
        return '';
    }
}