import React from "react";
import { TreeSelect, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoriesRequest } from "../redux/categoriesSlice";

function toTree(categories) {
    return categories.map((cat) => ({
        categoryId: cat.categoryId,
        name: cat.name,
        parent: cat.parent,
        children: cat.children ? toTree(cat.children) : [],

    }));
}

export default function categoryTreeSelect() {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.categories);
    // const hook_fetch = 
    return (
        <TreeSelect
        showSearch
        style={{ width: '100%' }}
        value={value}
        styles={{
            popup: { root: { maxHeight: 400, overflow: 'auto' } },
        }}
        placeholder="Select a Category"
        allowClear
        treeDefaultExpandAll
        onChange={onChange}
        treeData={toTree(data)}
        onPopupScroll={onPopupScroll}
        />
    );
}

