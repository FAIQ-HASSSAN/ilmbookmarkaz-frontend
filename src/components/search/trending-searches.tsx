"use client";

import { Icons } from "@/components/ui/icons";

const trendingSearches = [
    { term: "Prayer Mat", count: "2.3k searches" },
    { term: "Islamic Books", count: "1.8k searches" },
    { term: "Hijab Collection", count: "1.5k searches" },
    { term: "Quran Stand", count: "1.2k searches" },
    { term: "Wall Art", count: "980 searches" }
];

interface TrendingSearchesProps {
    onSearch: (term: string) => void;
}

export function TrendingSearches({ onSearch }: TrendingSearchesProps) {
    return (
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
                <Icons.Zap className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-bold text-gray-900">Trending Searches</h3>
            </div>

            <div className="space-y-2">
                {trendingSearches.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => onSearch(item.term)}
                        className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors text-left group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold">
                                {index + 1}
                            </div>
                            <span className="text-gray-900 font-medium group-hover:text-emerald-600 transition-colors">
                                {item.term}
                            </span>
                        </div>
                        <span className="text-xs text-gray-500">{item.count}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
