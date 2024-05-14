type TModification = Record<string, string | boolean>

export const classNames = (mainClass: string, mod: TModification = {}, additional: (string | undefined)[] = []) => [
    mainClass,
    ...(
        Object.entries(mod)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ),
    ...(
        additional.filter(Boolean)
    ),
].join(' ');

export const cn = classNames;
