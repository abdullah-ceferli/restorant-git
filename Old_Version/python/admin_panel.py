import json
import os
import subprocess
from decimal import Decimal
import tkinter as tk
from tkinter import messagebox, simpledialog, filedialog

json_data = r"DISK:data.json"  

# LOAD DATA
def load_data():
    try:
        with open(json_data, "r", encoding="utf-8") as f:
            data = json.load(f, parse_float=Decimal)
            return data
    except:
        return {}

def save_data(data):
    with open(json_data, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4, cls=DecimalEncoder)

class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return super().default(obj)

# DELETE FILE
def delete_file():
    save_data({})
    messagebox.showinfo("Success", "data.json cleared")

# REMOVE KEY
def remove_key():
    data = load_data()
    obj = simpledialog.askstring("Object", "Enter object name >>> ")
    if not obj:
        return
    found = False
    for group_name, group_value in data.items():
        if isinstance(group_value, list):
            for obj_block in group_value:
                if obj in obj_block:
                    found = True
                    inner_key = simpledialog.askstring("Key", "Enter key to remove >>> ")
                    if inner_key in obj_block[obj]:
                        obj_block[obj][inner_key] = Decimal("0")
                        save_data(data)
                        messagebox.showinfo("Removed", "Key emptied")
                    else:
                        messagebox.showerror("Not Found", "Key not found")
                    break
        if found:
            break
    if not found:
        messagebox.showerror("Not Found", "Object not found")

# APPEND NORMAL DATA
def append_simple():
    data = load_data()
    group = simpledialog.askstring("Group", "Group name >>> ")
    if not group:
        return
    obj_name = simpledialog.askstring("Object", "Object name >>> ")
    key = simpledialog.askstring("Key", "Key name >>> ")
    value = simpledialog.askstring("Value", "Value (numbers like 5.60 will be preserved) >>> ")

    try:
        if '.' in value:
            value = Decimal(value)
        else:
            value = int(value)
    except:
        pass  

    if group not in data:
        data[group] = []
    new_obj = {obj_name: {key: value}}
    data[group].append(new_obj)
    save_data(data)
    messagebox.showinfo("Added", "Simple data appended!")

# APPEND FULL JSON OBJ
def append_full():
    data = load_data()
    raw_json = simpledialog.askstring(
        "Full JSON", 
        "Paste full JSON object exactly as you want to append.\nExample:\n{\"count_All_Products\": [...]}",
    )
    if not raw_json:
        return
    try:
        new_obj = json.loads(raw_json, parse_float=Decimal)
    except:
        messagebox.showerror("Error", "Invalid JSON format!")
        return
    for key, value in new_obj.items():
        if key in data and isinstance(data[key], list) and isinstance(value, list):
            data[key].extend(value)
        else:
            data[key] = value
    save_data(data)
    messagebox.showinfo("Added", "Full object appended exactly as provided!")

# WINDOW
def append_data():
    win = tk.Toplevel()
    win.title("Append Options")
    win.geometry("300x160")
    tk.Label(win, text="Choose append type:", font=("Arial", 12)).pack(pady=10)
    tk.Button(win, text="Append Simple Entry", width=25, command=append_simple).pack(pady=5)
    tk.Button(win, text="Append Full Object", width=25, command=append_full).pack(pady=5)

# CHANGE VALUE
def change_value():
    data = load_data()
    obj = simpledialog.askstring("Object", "Object name >>> ")
    if not obj:
        return
    found = False
    for group, group_value in data.items():
        if isinstance(group_value, list):
            for obj_block in group_value:
                if obj in obj_block:
                    found = True
                    inner_key = simpledialog.askstring("Key", "Key to change >>> ")
                    if inner_key in obj_block[obj]:
                        new_value = simpledialog.askstring("Value", "New value (numbers like 5.60 will be preserved) >>> ")
                        try:
                            if '.' in new_value:
                                new_value = Decimal(new_value)
                            else:
                                new_value = int(new_value)
                        except:
                            pass
                        obj_block[obj][inner_key] = new_value
                        save_data(data)
                        messagebox.showinfo("Changed", "Value updated!")
                    else:
                        messagebox.showerror("Not Found", "Key not found")
                    break
        if found:
            break
    if not found:
        messagebox.showerror("Not Found", "Object not found")

# DELETE OBJ
def delete_object():
    data = load_data()
    obj = simpledialog.askstring("Object", "Object name to delete >>> ")
    if not obj:
        return
    found = False
    for group_name, group_value in data.items():
        if isinstance(group_value, list):
            for i, obj_block in enumerate(group_value):
                if obj in obj_block:
                    found = True
                    if messagebox.askyesno("Confirm", f"Delete {obj}?"):
                        del group_value[i]
                        save_data(data)
                        messagebox.showinfo("Deleted", f"Object {obj} deleted")
                    break
        if found:
            break
    if not found:
        messagebox.showerror("Not Found", "Object not found")

# DELTE GROUP
def delete_group():
    data = load_data()
    group = simpledialog.askstring("Group", "Group to delete >>> ")
    if not group:
        return
    if group not in data:
        messagebox.showerror("Not Found", "Group not found")
        return
    if messagebox.askyesno("Confirm", f"Delete group {group}?"):
        del data[group]
        save_data(data)
        messagebox.showinfo("Deleted", "Group deleted")

# GITPUSH
def git_push():
    repo_path = filedialog.askdirectory(title="Select your Git repo folder")
    if not repo_path:
        return
    try:
        subprocess.check_call(["git", "add", "."], cwd=repo_path)
        subprocess.check_call(["git", "commit", "-m", "Update from Tkinter"], cwd=repo_path)
        subprocess.check_call(["git", "push"], cwd=repo_path)
        messagebox.showinfo("Success", "Files pushed to GitHub successfully!")
    except subprocess.CalledProcessError as e:
        messagebox.showerror("Error", f"Git command failed:\n{e}")

root = tk.Tk()
root.title("JSON Admin Panel")
root.geometry("300x550")

tk.Button(root, text="Delete Into File", width=25, command=delete_file).pack(pady=8)
tk.Button(root, text="Remove Key", width=25, command=remove_key).pack(pady=8)
tk.Button(root, text="Append New Data", width=25, command=append_data).pack(pady=8)
tk.Button(root, text="Change Value", width=25, command=change_value).pack(pady=8)
tk.Button(root, text="Delete Obj", width=25, command=delete_object).pack(pady=8)
tk.Button(root, text="Delete Group", width=25, command=delete_group).pack(pady=8)
tk.Button(root, text="Push to GitHub", width=25, command=git_push).pack(pady=8)

root.mainloop()
