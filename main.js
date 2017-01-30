function cmdEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/([\"'])/g, "\\$1");
}

function encapsulateFallingSand(cmd, insertIDTag, mode, hasConditional, direction) {
    var s = "{";
    if (insertIDTag) {
        s += "id:\"minecraft:falling_block\",";
    }
    s += "Time:1,Block:\"minecraft:";
    if (mode == 1) {
        s += "repeating_";
    } else if (mode == 2) {
        s += "chain_";
    } else {
        return -1;
    }
    s += "command_block\",Data:";
    var data = direction;
    if (hasConditional) {
        data += 8;
    }
    s += data;
    s += ",TileEntityData:{Command:\"";
    s += cmdEscape(cmd);
    s += "\"}}";
    return s;
}
