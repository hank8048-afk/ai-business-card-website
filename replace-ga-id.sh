#!/bin/bash

# Google Analytics 測量 ID 替換腳本
# 使用方法：./replace-ga-id.sh G-你的測量ID

# 顏色代碼
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Google Analytics 測量 ID 替換工具${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# 檢查是否提供測量 ID
if [ -z "$1" ]; then
    echo -e "${RED}❌ 錯誤：請提供你的 Google Analytics 測量 ID${NC}"
    echo ""
    echo -e "${YELLOW}使用方法：${NC}"
    echo -e "  ./replace-ga-id.sh ${GREEN}G-你的測量ID${NC}"
    echo ""
    echo -e "${YELLOW}範例：${NC}"
    echo -e "  ./replace-ga-id.sh ${GREEN}G-ABC123DEF456${NC}"
    echo ""
    exit 1
fi

NEW_GA_ID="$1"

# 驗證測量 ID 格式
if [[ ! $NEW_GA_ID =~ ^G-[A-Z0-9]+$ ]]; then
    echo -e "${RED}❌ 錯誤：測量 ID 格式不正確${NC}"
    echo -e "${YELLOW}正確格式：${NC}G-XXXXXXXXXX（G- 開頭，後接英文字母和數字）"
    echo ""
    exit 1
fi

echo -e "${YELLOW}📋 將要替換的測量 ID：${NC}${GREEN}$NEW_GA_ID${NC}"
echo ""

# 檢查檔案是否存在
FILES=("index.html" "premium.html" "privacy.html" "terms-of-service.html")
MISSING_FILES=0

for file in "${FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo -e "${RED}❌ 找不到檔案：${file}${NC}"
        MISSING_FILES=$((MISSING_FILES + 1))
    fi
done

if [ $MISSING_FILES -gt 0 ]; then
    echo ""
    echo -e "${RED}請確認你在 website 目錄中執行此腳本${NC}"
    echo ""
    exit 1
fi

# 開始替換
echo -e "${BLUE}🔄 開始替換...${NC}"
echo ""

REPLACED_COUNT=0

for file in "${FILES[@]}"; do
    # 檢查檔案中是否有 G-XXXXXXXXXX
    if grep -q "G-XXXXXXXXXX" "$file"; then
        # 替換（macOS 使用 -i ''，Linux 使用 -i）
        if [[ "$OSTYPE" == "darwin"* ]]; then
            sed -i '' "s/G-XXXXXXXXXX/$NEW_GA_ID/g" "$file"
        else
            sed -i "s/G-XXXXXXXXXX/$NEW_GA_ID/g" "$file"
        fi
        
        echo -e "  ${GREEN}✅ $file${NC} - 替換成功"
        REPLACED_COUNT=$((REPLACED_COUNT + 1))
    else
        echo -e "  ${YELLOW}⚠️  $file${NC} - 已經替換過或找不到目標"
    fi
done

echo ""
echo -e "${BLUE}========================================${NC}"

if [ $REPLACED_COUNT -gt 0 ]; then
    echo -e "${GREEN}🎉 替換完成！${NC}"
    echo ""
    echo -e "${YELLOW}已替換 $REPLACED_COUNT 個檔案${NC}"
    echo ""
    echo -e "${BLUE}下一步：${NC}"
    echo "  1. 檢查檔案是否正確（搜尋你的測量 ID）"
    echo "  2. 部署到 GitHub Pages"
    echo "  3. 訪問網站並檢查 GA 即時報表"
    echo ""
else
    echo -e "${YELLOW}⚠️  沒有檔案需要替換${NC}"
    echo ""
fi

echo -e "${BLUE}========================================${NC}"
echo ""

