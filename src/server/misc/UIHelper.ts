import { Block } from '@rocket.chat/ui-kit';
import { v4 as uuid } from 'uuid';
import { IBlock } from '../../definition/uikit';

export class UIHelper {

    /**
     * Assign blockId, appId and actionId to every block/element inside the array
     * @param blocks the blocks that will be iterated and assigned the ids
     * @param appId the appId that will be assigned to
     * @returns the array of block with the ids properties assigned
     */
    public static assignIds(blocks: Array<IBlock | Block>, appId: string): Array<IBlock | Block> {
        blocks.forEach((block: (IBlock | Block) & { appId?: string, blockId?: string, elements?: Array<any> }) => {
             if (!block.appId) {
                 block.appId = appId;
             }
             if (!block.blockId) {
                 block.blockId = uuid();
             }
             if (block.elements) {
                 block.elements.forEach((element) => {
                     if (!element.actionId) {
                         element.actionId = uuid();
                     }
                 });
             }
         });

        return blocks;
     }
}
