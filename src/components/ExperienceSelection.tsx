'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Icon } from '@iconify/react';

type ExperienceSelectionProps = {
    value: string;
    onValueChange: (value: string) => void;
};

export function ExperienceSelection({ value, onValueChange }: ExperienceSelectionProps) {
    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select experience" />
            </SelectTrigger>
            <SelectContent className="truncate">
                <SelectItem value="manager">
                    <Icon icon="hugeicons:manager" className="inline mr-2" />
                    Manager
                </SelectItem>
                <SelectItem value="discord" className="truncate">
                    <Icon icon="ic:baseline-discord" className="inline mr-2" />
                    Discord
                </SelectItem>
                <SelectItem value="photograph">
                    <Icon icon="material-symbols:camera-rounded" className="inline mr-2" />
                    Photograph
                </SelectItem>
            </SelectContent>
        </Select>
    );
}
