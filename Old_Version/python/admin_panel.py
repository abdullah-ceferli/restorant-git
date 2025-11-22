import ttkbootstrap as ttk
from ttkbootstrap.constants import *
from tkinter import simpledialog, messagebox, filedialog
import json
import subprocess
from decimal import Decimal


# ================= JSON HANDLING ================= #

class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return super().default(obj)


json_data = r"Disk:data.json"


def load_data():
    try:
        with open(json_data, "r", encoding="utf-8") as f:
            return json.load(f, parse_float=Decimal)
    except:
        return {}


def save_data(data):
    with open(json_data, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4, cls=DecimalEncoder)


# ================= ACTION FUNCTIONS ================= #

def clear_file():
    save_data({})
    messagebox.showinfo("Success", "data.json was cleared!")


# ===== REMOVE KEY POPUP =====
def remove_key():
    data = load_data()

    group = simpledialog.askstring("Group", "Enter group name:")
    if not group or group not in data:
        messagebox.showerror("Error", "Group not found!")
        return

    obj = simpledialog.askstring("Object", "Enter object name:")
    if not obj:
        return

    key = simpledialog.askstring("Key", "Enter key to remove or clear:")
    if not key:
        return

    items = data[group]

    for block in items:
        if obj in block and key in block[obj]:
            # Popup window
            popup = ttk.Toplevel()
            popup.title("Remove Key Options")
            popup.geometry("300x120")
            ttk.Label(popup, text=f"Choose action for key '{key}':", font=("Segoe UI", 10)).pack(pady=10)

            def delete_key():
                del block[obj][key]
                save_data(data)
                messagebox.showinfo("Success", f"Key '{key}' removed!")
                popup.destroy()

            def clear_key_value():
                block[obj][key] = ""
                save_data(data)
                messagebox.showinfo("Success", f"Key '{key}' value cleared!")
                popup.destroy()

            ttk.Button(popup, text="Delete Key", bootstyle=DANGER, command=delete_key).pack(pady=5)
            ttk.Button(popup, text="Clear Key Value", bootstyle=WARNING, command=clear_key_value).pack(pady=5)
            return

    messagebox.showerror("Error", "Object or key not found!")


# ===== REMOVE BLOCK POPUP =====
def remove_block():
    data = load_data()

    group = simpledialog.askstring("Group", "Enter group name:")
    if not group or group not in data:
        messagebox.showerror("Error", "Group not found!")
        return

    obj = simpledialog.askstring("Block Name", "Enter block to remove or clear:")
    if not obj:
        return

    items = data[group]

    for block in items:
        if obj in block:
            popup = ttk.Toplevel()
            popup.title("Remove Block Options")
            popup.geometry("300x120")
            ttk.Label(popup, text=f"Choose action for block '{obj}':", font=("Segoe UI", 10)).pack(pady=10)

            def delete_block():
                del block[obj]
                save_data(data)
                messagebox.showinfo("Success", f"Block '{obj}' removed!")
                popup.destroy()

            def clear_block_value():
                block[obj] = {}
                save_data(data)
                messagebox.showinfo("Success", f"Block '{obj}' value cleared!")
                popup.destroy()

            ttk.Button(popup, text="Delete Entire Block", bootstyle=DANGER, command=delete_block).pack(pady=5)
            ttk.Button(popup, text="Clear Block Value", bootstyle=WARNING, command=clear_block_value).pack(pady=5)
            return

    messagebox.showerror("Error", "Block not found!")


def append_simple():
    data = load_data()

    group = simpledialog.askstring("Group", "Group name:")
    obj = simpledialog.askstring("Object", "Object name:")
    key = simpledialog.askstring("Key", "Key:")
    value = simpledialog.askstring("Value", "Value:")

    if not all([group, obj, key, value]):
        return

    try:
        value = Decimal(value) if "." in value else int(value)
    except:
        pass

    if group not in data:
        data[group] = [{}]

    data[group][0][obj] = {key: value}

    save_data(data)
    messagebox.showinfo("Success", "Simple entry added!")


def append_full():
    data = load_data()

    raw = simpledialog.askstring("Full JSON", "Paste full JSON:")
    if not raw:
        return

    try:
        new_obj = json.loads(raw, parse_float=Decimal)
    except:
        messagebox.showerror("Error", "Invalid JSON!")
        return

    for key, val in new_obj.items():
        if key in data and isinstance(data[key], list) and isinstance(val, list):
            data[key].extend(val)
        else:
            data[key] = val

    save_data(data)
    messagebox.showinfo("Success", "JSON appended!")


def change_value():
    data = load_data()

    group = simpledialog.askstring("Group", "Group name:")
    if not group or group not in data:
        messagebox.showerror("Error", "Group not found!")
        return

    obj = simpledialog.askstring("Object", "Object name:")
    key = simpledialog.askstring("Key", "Key name:")
    val = simpledialog.askstring("Value", "New value:")

    if not all([obj, key, val]):
        return

    try:
        val = Decimal(val) if "." in val else int(val)
    except:
        pass

    for block in data[group]:
        if obj in block and key in block[obj]:
            block[obj][key] = val
            save_data(data)
            messagebox.showinfo("Success", "Value updated!")
            return

    messagebox.showerror("Error", "Object or key not found!")


def delete_group():
    data = load_data()

    group = simpledialog.askstring("Group", "Group name:")
    if not group:
        return

    if group not in data:
        messagebox.showerror("Error", "Group not found!")
        return

    if messagebox.askyesno("Confirm", f"Delete group '{group}'?"):
        del data[group]
        save_data(data)
        messagebox.showinfo("Deleted", "Group removed")


def git_push():
    repo = filedialog.askdirectory(title="Select Git repository")
    if not repo:
        return

    try:
        subprocess.check_call(["git", "add", "."], cwd=repo)
        subprocess.check_call(["git", "commit", "-m", "Update from JSON Admin"], cwd=repo)
        subprocess.check_call(["git", "push"], cwd=repo)
        messagebox.showinfo("Success", "Pushed to GitHub!")
    except Exception as e:
        messagebox.showerror("Error", f"Git error:\n{e}")


# ================= UI ================= #

app = ttk.Window(themename="superhero")
app.title("JSON Admin Panel")
app.geometry("420x700")

ttk.Label(
    app,
    text="JSON Admin Panel",
    font=("Segoe UI", 18, "bold"),
    bootstyle="inverse"
).pack(pady=20)


def add_button(text, command, style=INFO, pad=10):
    ttk.Button(
        app,
        text=text,
        command=command,
        bootstyle=style,
        width=35
    ).pack(pady=pad)


add_button("Clear File", clear_file, DANGER)
add_button("Remove Key", remove_key, SECONDARY)
add_button("Remove Block", remove_block, DANGER)
add_button("Append Simple Data", append_simple, SUCCESS)
add_button("Append Full JSON", append_full, SUCCESS)
add_button("Change Value", change_value, WARNING)
add_button("Delete Group", delete_group, DANGER)
add_button("Push to GitHub", git_push, PRIMARY, pad=20)

app.mainloop()
