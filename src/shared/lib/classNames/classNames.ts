export type TCNModification = Record<string, string | boolean | undefined>

export const classNames = (
    mainClass: string,
    mod: TCNModification = {},
    additional: (string | undefined)[] = [],
) => [
    mainClass,
    ...(
        Object.entries(mod)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className)
    ),
    ...(
        additional.filter(Boolean)
    ),
].join(' ');

export const cn = classNames;
